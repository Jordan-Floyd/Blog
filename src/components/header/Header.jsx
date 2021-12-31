import "./header.css"

export default function Header() {
    return (
        <div className= "header">
            <div className="headerTitles">
                <span className="headerTitleSm">Jordan Floyd</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"
             src="https://res.cloudinary.com/dvavaunrm/image/upload/v1640977911/20201106_164447_p9g5ao.jpg"
             alt=""
             />
        </div>
    )
}
