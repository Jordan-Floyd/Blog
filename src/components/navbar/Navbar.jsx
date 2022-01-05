import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"


export default function Navbar() {
    const user = true;

    return (
        <div className = "top">
            <div className="topLeft">
                <a href="https://www.linkedin.com/in/jordan-floyd09/" i className="topIcon fab fa-linkedin"></a>
                <a href="https://www.facebook.com/jordan.floyd.52" i className="topIcon fab fa-facebook"></a>
                <a href="https://github.com/Jordan-Floyd" i className="topIcon fab fa-github"></a>
                <a href="https://www.instagram.com/ilovealtapow/" i className="topIcon fab fa-instagram-square"></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className= "topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className= "topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className= "topListItem">
                        <Link className="link" to="/">CONNECT</Link>
                    </li>
                    <li className= "topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className= "topListItem">
                        <Link className="link" to="/settings">SETTINGS</Link>
                    </li>
                    <li className= "topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className = "topImage"
                            src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-618833.jpg&fm=jpg" 
                            alt=""
                        />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
