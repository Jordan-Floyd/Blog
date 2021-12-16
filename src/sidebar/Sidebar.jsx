import "./sidebar.css"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://res.cloudinary.com/dvavaunrm/image/upload/c_scale,w_236/v1639686201/jordanopie_tkxutn.jpg" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Dolorum accusantium rem autem necessitatibus beatae!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-linkedin"></i>
                    <i className= "sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-github"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
