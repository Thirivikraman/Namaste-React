import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"
import RestMenu from "./components/RestMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const App = () => {
    return (
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
    );}; 

const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(()=>import("./components/Grocery.js"));
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
            path:"/Grocery",
            element:<Suspense fallback= {<h2>Loading</h2>}><Grocery/></Suspense>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestMenu/>
        }
    ]
    },
    
]);



root.render(<RouterProvider router={AppRoute}/>);