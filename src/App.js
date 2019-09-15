import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminHomePage from './pages/AdminHomePage';

class App extends React.Component {
    render() {
        return (
            <div className='App'>

                <Route exact path='/' component={HomePage} />
                <Route path='/admin' component={AdminHomePage} />

            </div>
        )
    }
}

export default withRouter(App)
