import React from "react";
import { Link } from "react-router-dom";
class NotLogInf extends React.Component {

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <p className="LoginText"><h3>Sign In</h3></p>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <button className="btn btn-warning btn-block">Sign In</button>
                        < h5>You do not have an account?
                <Link className="nav-link" to='/register'>Register!</Link></h5>
                    </form>
                </div>
            </div>


        )
    }
}
export default NotLogInf;