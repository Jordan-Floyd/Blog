import "./singlePost.css"



export default function SinglePost() {
    return (
        <div className= "singlePost">
            <div className="singlePostWrapper">
                <img src="https://res.cloudinary.com/dvavaunrm/image/upload/c_scale,h_424,w_682/v1636225263/brothers_wq7oaf.jpg"
                alt=""
                className="singlePostImage"
                />
                <h1 className="singlePostTitle">
                    Single post Title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Jordan Floyd</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, sed dicta quasi hic amet placeat explicabo, officia voluptas
                    repellendus laboriosam soluta eveniet error vel?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, sed dicta quasi hic amet placeat explicabo, officia voluptas
                    repellendus laboriosam soluta eveniet error vel?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, sed dicta quasi hic amet placeat explicabo, officia voluptas
                    repellendus laboriosam soluta eveniet error vel?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, sed dicta quasi hic amet placeat explicabo, officia voluptas
                    repellendus laboriosam soluta eveniet error vel?
                </p>
            </div>
        </div>
    )
}
