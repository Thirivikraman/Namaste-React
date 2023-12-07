import React from "react"
import ReactDOM from "react-dom"

const heading = React.createElement(
    "div",
    {id:"Parent"},
    [
        React.createElement("div",{id:"child1"},[React.createElement("h1",{},"tis is H1"),
        React.createElement("h2",{},"this is Vikram")]),
        React.createElement("div",{id:"child2"},[React.createElement("h1",{},"this is H1"),
        React.createElement("h2",{},"this is H2")])
    ]
    );



const DOMnode = document.getElementById("root");
const root = ReactDOM.createRoot(DOMnode);

console.log(heading);
console.log(DOMnode);
console.log(root);

root.render(heading);