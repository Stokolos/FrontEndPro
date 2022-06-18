import React from "react";

class Example extends React.Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <p>{this.props.element}</p>
        )
    }
}

export default Example;