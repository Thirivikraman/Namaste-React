import { LOGO_URL } from "../utilities/constants";
const Header = ()=>{
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
                </ul>
            </div>
        </div>
    );
}

export default Header;