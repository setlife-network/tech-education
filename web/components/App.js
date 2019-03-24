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
                <Flex width='100%'>
                    <Header/>
                </Flex>
                <Flex
                    height={[
                        'auto',
                        // 'auto',
                        // '768px',
                        // '768px'
                    ]}
                    width={[
                        1, // 100% below smallest breakpoint
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