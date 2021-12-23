import "./header.css"

export default function Header() {
    return (
        <div className= "header">
            <div className="headerTitles">
                <span className="headerTitleSm">Jordan Floyd</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg"
             src="https://res.cloudinary.com/dvavaunrm/image/upload/v1639687369/devilscastle_dypbla.jpg"
             alt=""
             />
        </div>
    )
}
