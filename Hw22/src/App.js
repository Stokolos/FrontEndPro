import React from "react";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }

    }

    deleteHandler(id) {
        const changeArr = this.state.arr;
        changeArr.splice(id,1)
        this.setState({arr:changeArr})
    }

    render() {
        return (
            <ul>
                {this.state.arr.map((item,i) =>
                    <li key={i}>
                        <div>
                            <p>{item.id}</p>
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                            <button onClick={() => this.deleteHandler(i)}>Удалить</button>
                        </div>
                    </li>)}
            </ul>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ arr: json }))
    }
}

export default App;
