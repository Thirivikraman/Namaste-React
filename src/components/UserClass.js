import React from "react";

class UserClass extends React.Component{

    constructor(abc){
        super(abc);
        this.state = {
            count:0
        } 
        //note: In React, the state initialization should be done within the constructor
    }
    render(){
        return (<div>
            <h2>Count {this.state.count}</h2>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1
                });
            }}>Click</button>
            <h1>Name : {this.props.name}</h1>
            <h3>Role : {this.props.role}</h3>
            <h3>Contact: {this.props.Contact}</h3>
        </div>);
    }
}

export default UserClass;