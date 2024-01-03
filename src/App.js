import React, { lazy, Suspense, useContext, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact"
import RestMenu from "./components/RestMenu";
import Cart from "./components/Cart.js";
import UserContext from "./utilities/UserContext.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore.js";

const App = () => {
    const UserName = useContext(UserContext);
    const [nameContext, SetNameContext] = useState({loggedInUser: "Vikram"});
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: nameContext.loggedInUser, SetNameContext}} >
        <div className="app">
        <Header/>
          <Outlet/>  
        </div>
        </UserContext.Provider>
        </Provider> 
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
        },
        {
            path:"/Cart",
            element:<Cart/>
        }
    ]
    },
    
]);



root.render(<RouterProvider router={AppRoute}/>);