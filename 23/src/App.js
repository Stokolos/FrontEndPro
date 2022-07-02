import React, { useEffect, useState } from 'react';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';

const App = () => {
    const[todo, setTodo] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setTodo(json))
    })
    return (
        <div>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoList  todo={todo} setTodo={setTodo}/>
        </div>
    );
};

export default App;