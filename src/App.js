import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const App = () => {
    return (
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
    );}; 

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRoute = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }]
    },
    
]);



root.render(<RouterProvider router={AppRoute}/>);