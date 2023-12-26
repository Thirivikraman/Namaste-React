import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilities/constants";
import { useState } from "react";
import useOnlineStatus from "../utilities/useOnlineStatus"

const Header = ()=>{
    const [state,setState] = useState("Login");
    const toggleBtn = ()=> {state=="Login"?setState("Logout"):setState("Login")};
    const status = useOnlineStatus();
    return (
        <div className="flex justify-between items-center">
            <div className="w-24 ml-10">
                <img id="logoimg" src={LOGO_URL}></img>
            </div>
            {/*<div>{status=="offline"? <h3>You're offline</h3>: <h3>You're online</h3>}</div>*/}
            <div className="mr-10">
                <ul id="navItems" className="flex gap-10 items-center">
                    <li className=" border-b-2 border-b-white hover:border-red-500"><Link  to="/">Home</Link></li>
                    <li className=" border-b-2 border-b-white hover:border-blue-500"><Link to="/Contact">Contact</Link></li>
                    <li className=" border-b-2 border-b-white hover:border-green-500"><Link to="/About">About</Link></li>
                    <li className=" border-b-2 border-b-white hover:border-yellow-500"><Link to="/Grocery">Grocery</Link></li>
                    <li className=" border-b-2 border-b-white hover:border-violet-500">Cart</li>
                    <li><button className="bg-teal-300 hover:bg-teal-500 px-3 py-1" onClick={toggleBtn}>{state}</button></li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;