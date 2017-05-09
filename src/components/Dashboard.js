/**
 * Created by intelligrape on 9/5/17.
 */
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import User from './User'
class Dashboard extends Component{
    render() {
        return (<div>

            Dashboard
            <Link to="/dashboard/admin">Admin</Link> >>
            <Link to="/dashboard/user">User</Link>
            <Route path="/dashboard/:id" render={props => <User {...props}/>}></Route>


        </div>)
    }
}

export default Dashboard;