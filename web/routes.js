import React from 'react';
import { Route, Switch } from 'react-router';

import Flex from './components/Flex';
import CurriculumEthosPage from './pages/CurriculumEthosPage';
import LandingPage from './pages/LandingPage';


/*

-- Routing guide --


*/

export default (
    <Flex className='routes-container' width='100vw'>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/curriculum-ethos' component={CurriculumEthosPage} />
        </Switch>
    </Flex>
);