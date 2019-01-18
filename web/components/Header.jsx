import React from 'react';
import { connect } from 'react-redux';

import Flex from './Flex';

import theme from '../styles/theme';

class Header extends React.Component {
    render() {
        return (
            <Flex
                className='Header'
                width='100%'
                bg={theme.colors.facebook}
                style={{ position: 'fixed', top: '0', left: '0', zIndex: '2' }}
            >
                <h6>Header</h6>
            </Flex>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
