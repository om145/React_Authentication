import "./LogIn.css"

export const LogIn = () => {
    return (<>
        <div className="main">
            <h2 className="title">Log In</h2>
            <div className="details">
                <label>Email:</label>
                <input type="email" className="uEmail" />
                <label>Password:</label>
                <input type="password" className="uPassword" />
                <button className="submit-btn">Submit</button>
            </div>
        </div>
        </>)
}