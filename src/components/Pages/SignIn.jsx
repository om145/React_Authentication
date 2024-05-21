import "./SignIn.css"

export const SignIn = () => {
    return (<>
        <div className="main">
            <h2 className="title">Sign In</h2>
            <div className="details">
                <label>Name:</label>
                <input type="text" className="uName" />
                <label>Email:</label>
                <input type="email" className="uEmail" />
                <label>Password:</label>
                <input type="password" className="uPassword" />
                <button className="submit-btn">Submit</button>
            </div>
        </div>
        </>)
}