import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Flex from './Flex'

import routes from '../routes'
import Header from './Header';

import theme from '../styles/theme';

class App extends React.Component {
    componentDidMount() {
        // Run initialization functions here
    }

    render() {
        const { location } = this.props;
        return (
            <Flex center column bg={theme.colors.grey}>
                <Flex height='6vh' width='100%'>
                    <Header/>
                </Flex>
                <Flex
                    height='auto'
                    width={[
                        1, // 100% below smallest breakpoint
                        3 / 4, // 75% next breakpoint and up
                        5 / 8, // 62.5% next breakpoint and up
                        1 / 2, // 50% next breakpoint and up
                    ]}
                >
                    {routes}
                </Flex>
            </Flex>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)