import React from 'react';
import { Route } from 'react-router-dom';

import AdminCoursesPage from './AdminCoursesPage'
import AdminLoginPage from './AdminLoginPage'

export default class AdminHomePage extends React.Component {
    componentDidMount() {
        console.log('AdminHomePage: componentDidMount')
    }
    render() {
        const { match } = this.props

        return (
            <div className='AdminHomePage'>
                <Route
                    path={`${match.url}/login`}
                    component={AdminLoginPage}
                />
                <Route
                    path={`${match.url}/courses`}
                    component={AdminCoursesPage}
                />
            </div>
        );
    }
}

