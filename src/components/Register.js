import React from "react";
import { Link } from "react-router-dom";
class NotLogInf extends React.Component {

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <p className="RegisterText"><h3>Register</h3></p>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Repeat Password</label>
                            <input type="password" className="form-control" placeholder="Repeat Password" />
                        </div>

                        <button className="btn btn-warning btn-block">Register</button>

                        <h5>Already have an account?
                <Link className="nav-link" to='/signin'>Sign In!</Link></h5>
                    </form>
                </div></div>
        )
    }
}
export default NotLogInf;