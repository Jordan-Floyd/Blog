import "./header.css"

export default function Header() {
    return (
        <div className= "header">
            <div className="headerTitles">
                <span className="headerTitleLg">Jordan Floyd</span>
                <span className="headerTitleSm"></span>
            </div>
            <img className="headerImg"
             src="https://res.cloudinary.com/dvavaunrm/image/upload/v1640977911/20201106_164447_p9g5ao.jpg"
             alt=""
             />
        </div>
    )
}
