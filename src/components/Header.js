import { Link } from "react-router-dom";
import { LOGO_URL } from "../utilities/constants";
import { useState } from "react";
import useOnlineStatus from "../utilities/useOnlineStatus"

const Header = ()=>{
    const [state,setState] = useState("login");
    const toggleBtn = ()=> {state=="login"?setState("logout"):setState("login")};
    const status = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo">
                <img id="logoimg" src={LOGO_URL}></img>
            </div>
            <div>{status=="offline"? <h3>You're offline</h3>: <h3>You're online</h3>}</div>
            <div className="nav-bar">
                <ul id="navItems">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li><button className="btnlogin" onClick={toggleBtn}>{state}</button></li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;