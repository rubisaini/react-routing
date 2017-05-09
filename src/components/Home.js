
/**
 * Created by intelligrape on 9/5/17.
 */
import React, {Component} from 'react';
import {Route, Link, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard'

class Home extends Component{
    clickHandle = () => {
        this.props.history.push('/dashboard');
    };
    render() {
        return (<div>
            <button onClick={this.clickHandle}>Dashboard</button>
            <Route path="/dashboard" component={Dashboard}></Route>
        </div>)
    }
}

export default withRouter(Home);

// we can use decorator for this : https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy