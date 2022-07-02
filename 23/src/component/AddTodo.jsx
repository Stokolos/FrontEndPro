import React, { useEffect, useState } from 'react';

const AddTodo = ({ todo, setTodo }) => {
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

    const saveTodo = () => {
        setTodo(
            [{ id: Date.now(), title: "Пост", body: value }, ...todo]
        )
        setValue("")
        setFormValid(false)
    }


    const valueHandler = (e) => {
        setValue(e.target.value)
        const reg = /^(?=.*[a-z])(?=.*[A-Z]).{2,7}$/
        if (!reg.test(e.target.value)) {
            setValueError("Не коректный пост")
        } else {
            setValueError("")
        }
    }

    const blur = (e) => {
        switch (e.target.name) {
            case "value":
                setValueDirty(true)
                break
        }
    }
    const prevent = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={prevent}>
            <div>
                {(valueDirty && valueError) && <div style={{ color: "red" }}>{valueError}</div>}
                <input onBlur={e => blur(e)} name='value' type="text" placeholder='Пост' value={value} onChange={e => valueHandler(e)} />
                <div>Текст должен содержать символы нижнего и верхнего регистра, и не быть менее 2 или более 7 символов</div>
            </div>
                <button disabled={!formValid} onClick={saveTodo}>Добавить</button>
        </form>
    );
};

export default AddTodo;