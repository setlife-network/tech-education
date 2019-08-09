import React from 'react';
import { Switch, Route } from 'react-router';

import AdminCoursesPage from './AdminCoursesPage'
import AdminLoginPage from './AdminLoginPage'

export default class AdminHomePage extends React.Component {
    componentDidMount() {
        console.log('AdminHomePage: componentDidMount')
    }
    render() {
        return (
            <Switch>
                <p>Test</p>
                <Route path='/login' component={AdminLoginPage} />
                <Route path='/courses' component={AdminCoursesPage} />
            </Switch>
        );
    }
}

