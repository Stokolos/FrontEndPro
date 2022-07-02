import React, {useEffect, useState } from 'react';

const TodoList = ({ todo, setTodo }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState("")
    const [valueDirty, setValueDirty] = useState(false)
    const [valueError, setValueError] = useState("Поле не может быть пустым")
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (valueError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [valueError])

    const deleteTodo = (id) => {
        const newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    const valueHandler = (e) => {
        setValue(e.target.value)
        const reg = /^(?=.*[a-z])(?=.*[A-Z]).{2,7}$/
        if (!reg.test(e.target.value)) {
            setValueError("Не коректный пост")
            setFormValid(false)
        } else {
            setValueError("")
            setFormValid(true)
        }
    }

    const blur = (e) => {
        switch (e.target.name) {
            case "value":
                setValueDirty(true)
                break
        }
    }

    const editTodo = (id, body) => {
        setEdit(id)
        setValue(body)
    }

    const saveTodo = (id) => {
        const newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.body = value
            }

            return item
        })
        setTodo(newTodo)
        setEdit(null)
        setFormValid(false)
    }

    return (
        <div>
            {todo.map(item =>
                <div key={item.id}>
                    {
                        edit === item.id ? <div>
                            <div>Редактирование поста</div>
                            {(valueDirty && valueError) && <div style={{ color: "red" }}>{valueError}</div>}
                            <input onBlur={e => blur(e)} value={value} onChange={e => valueHandler(e)} />
                        </div> : <div>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                        </div>
                    }
                    {
                        edit === item.id ? <div>
                            <button disabled={!formValid}  onClick={() => saveTodo(item.id)}>Save</button>
                        </div> : <div> <button onClick={() => {deleteTodo(item.id)}}>Удалить</button>
                            <button onClick={() => editTodo(item.id, item.body)}>Change</button>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default TodoList;