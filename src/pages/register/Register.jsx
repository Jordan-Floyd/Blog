import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">register</span>
            <form className="registerForm">
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email.." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password.." />
                <button className="registerButton">register</button>
            </form>
                <button className="registerButton">Register</button>
        </div>
    )
}
