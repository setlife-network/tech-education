import React from 'react';
import { Route, Switch } from 'react-router';

import Flex from './components/Flex';
import LandingPage from "./components/LandingPage";


/*

-- Routing guide --


*/

export default (
    <Flex className='routes-container' width='100vw'>
        <Switch>
            <Route exact path='/' component={LandingPage} />
        </Switch>
    </Flex>
);