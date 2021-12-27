import "./write.css"



export default function Write() {
    return (
        <div className="write">
            <img className="writeImage" 
                src="https://res.cloudinary.com/dvavaunrm/image/upload/c_scale,h_483,w_946/v1639687369/devilscastle_dypbla.jpg" 
                alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder= "Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
