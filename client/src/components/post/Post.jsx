import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg" 
                src="https://res.cloudinary.com/dvavaunrm/image/upload/v1640978176/IMG_0572_gw0jjh.jpg" 
                alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">
                    Family
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quae dolores, vitae dolor provident deserunt quidem voluptatum quia? Debitis,
                nisi voluptate neque animi sequi dolor, ex, perferendis fuga earum quod ab?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quae dolores, vitae dolor provident deserunt quidem voluptatum quia? Debitis,
                nisi voluptate neque animi sequi dolor, ex, perferendis fuga earum quod ab?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quae dolores, vitae dolor provident deserunt quidem voluptatum quia? Debitis,
                nisi voluptate neque animi sequi dolor, ex, perferendis fuga earum quod ab?
            </p>
        </div>
    )
}
