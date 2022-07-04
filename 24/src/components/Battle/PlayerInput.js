import React, { useState } from "react";

const PlayerInput = (props) => {
    const [username, setUsername] = useState('')

    const handlerChange = (event) => {
        setUsername(event.target.value)
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        props.onSubmit(props.id, username)
    }

    return (
        <form className="column" onSubmit={handelSubmit}>
            <label
                htmlFor="username"
                className="header"
            >{props.label}</label>
            <input
                id="username"
                type="text"
                placeholder="GitHub Username"
                autoComplete="off"
                value={username}
                onChange={handlerChange}
            />
            <button className="button" type="submit"
                disabled={!username}
            >Submit</button>
        </form>
    )

}

export default PlayerInput;