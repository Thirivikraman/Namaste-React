import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    render(){
        return (
        <div>
            <h1>This is About page</h1>
            <UserClass name ="first"/>
        </div>
    );
    }
}

export default About;