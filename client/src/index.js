import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import SignIn from './components/auth/sign'
import Home from './components/home/home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routing = (
    <Router>
        <div>
            {/* <UserTest /> <DashBoard />
            {/* <Route exact path="/" component={App} /> */}
            <Route path="/sign" component={SignIn} />
            {/* <Route path="/signup" component={SignUp} />  */}
            <Route path="/" component={Home} />
            {/* <Profile /> */}
            {/* <Earning /> */}
            {/* <Manage /> */}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
