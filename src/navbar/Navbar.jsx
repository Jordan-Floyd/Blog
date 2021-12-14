import React from 'react'
import "./navbar.css"


export default function Navbar() {
    return (
        <div className = "top">
            <div className="topLeft">
                <i className="topIcon fab fa-linkedin"></i>
                <i className= "topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-github"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className= "topListItem">HOME</li>
                    <li className= "topListItem">ABOUT</li>
                    <li className= "topListItem">CONTACT</li>
                    <li className= "topListItem">WRITE</li>
                    <li className= "topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className = "topImage"
                src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-618833.jpg&fm=jpg" 
                alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
