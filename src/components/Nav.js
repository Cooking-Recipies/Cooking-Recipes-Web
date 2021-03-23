import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top ">
                <div className="container">
                    <Link className="navbar-brand" to='/'>CookingRecipes</Link>
                    <div calssName="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/signin'>Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/register'>Register</Link>
                            </li>
                        </ul>

                    </div>

                </div>


            </nav>
        )
    }
}
export default Nav;