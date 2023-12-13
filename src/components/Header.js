import { LOGO_URL } from "../utilities/constants";
import { useState } from "react";
const Header = ()=>{
    const [state,setState] = useState("login");
    const toggleBtn = ()=> {state=="login"?setState("logout"):setState("login")};
    return (
        <div className="header">
            <div className="logo">
                <img id="logoimg" src={LOGO_URL}></img>
            </div>
            <div className="nav-bar">
                <ul id="navItems">
                    <li>Home</li>
                    <li>Shops</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li><button className="btnlogin" onClick={toggleBtn}>{state}</button></li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;