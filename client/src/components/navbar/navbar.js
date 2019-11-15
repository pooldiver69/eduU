import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Firebase from '../../firebaseConfig'

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            isAuthenticated: false,
        });
        Firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
        this.authNavbar.bind(this)
    }

    onAuthStateChanged = (user) => {
        this.setState({ isAuthenticated: !!user });
    }

    authNavbar = function () {
        if (this.state.isAuthenticated) {
            return (
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item">
                        <Link to="profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Log Out</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item">
                        <Link to="sign" className="nav-link">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="register" className="nav-link">Sign Up</Link>
                    </li>
                </ul>
            )
        }
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Route>
                    <a className="navbar-brand" href="/">EduU</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Discover</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        {this.authNavbar()}
                    </div>
                </Route>
            </nav>
        )
    }
}

export default Navigation;