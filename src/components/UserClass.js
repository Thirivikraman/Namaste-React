import React from "react";

class UserClass extends React.Component{

    constructor(abc){
        super(abc);
        this.state = {
            Name: this.props.name,
            intervalId : ""
        } 
        console.log("constructor " + this.state.Name);
        //note: In React, the state initialization should be done within the constructor
    }
    id = "";
    componentDidMount(){
        this.id = setInterval(()=>{
            console.log("componentDidMount " + this.state.Name);
        },2000) 
    }
    componentWillUnmount(){
        clearInterval(this.id);
        console.log("componentWillUnmount "+ this.state.Name);
    }
    render(){
        console.log("render " + this.state.Name);
        return (
        <div>
            <h1>Name : {this.state.Name}</h1>
        </div>);
    }
}

export default UserClass;