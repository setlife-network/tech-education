import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Flex from './Flex';
import Card from './Card';
import Text from './Text';

import theme from '../styles/theme';

const Content = styled.div`
/* Large */
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;
  
    @media all and (min-width: 1024px ) {
        margin-right: 5%;  
    }

    /* Medium screens */
    @media all and (max-width: 768px) {
        /* When on medium sized screens, we center it by evenly distributing empty space around items */
        justify-content: space-around;
    }

    /* Small screens */
    @media all and (max-width: 500px) {
        /* On small screens, we are no longer using row direction but column, this will be change */
        flex-direction: column;
      }
    }
`

class Header extends React.Component {
    render() {
        return (
            <Card
                depth={2}
                width='100%'
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 2
                }}
            >
                <Flex
                    row
                    alignItems='center'
                    bg={theme.colors.facebook}
                >
                    {/* <Content>
                    <Card my='auto' mx='0.5rem'>
                        <Text color={theme.colors.textSecondary}>{'Curriculum'}</Text>
                    </Card>
                    <Card my='auto' mx='0.5rem'>
                        <Text color={theme.colors.textSecondary}>{'Courses'}</Text>
                    </Card>
                    <Card my='auto' ml='0.5rem' mr='1rem'>
                        <Text color={theme.colors.textSecondary}>{'Home'}</Text>
                    </Card>
                </Content> */}
                    <Card>
                        <Text
                            mx='1rem'
                            color={theme.colors.textSecondary}
                        >
                            {'Home'}
                        </Text>
                    </Card>
                </Flex>
            </Card>
            
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
