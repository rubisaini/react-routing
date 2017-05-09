/**
 * Created by intelligrape on 9/5/17.
 */
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
render(<Router>
    <div>
        <Link  to="/">Home</Link> >>
        <Link to="/about-us">About Us</Link> >>
        <Link to="/contact-us">Contact Us</Link>
        <Switch>

        <Route path="/contact-us" component={ContactUs}/>
        <Route path="/about-us" render={(props) => (<AboutUs {...props} phoneNo="9654173324" />)}/>
            <Route path="/" component={Home}/>

        </Switch>
    </div>
</Router>, document.getElementById('app'));