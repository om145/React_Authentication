import "./Navbar.css"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(<>
        <header>
            <div className="container">
                {/* <div className="logo">
                    <a href="/">Logo</a>
                </div> */}

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/signin">Sign In</NavLink></li>
                        <li><NavLink to="/LogIn">Log In</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}