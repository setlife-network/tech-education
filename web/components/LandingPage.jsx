import React from 'react';

import Flex from './Flex';
import Text from './Text';
import SetlifeCourses from './SetlifeCourses';

import theme from '../styles/theme';

import TEBackground from '../images/te_background.jpg';
import CEBackground from '../images/ce_background.png';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Flex column className='LandingPage' width='100%'>
                    <Flex
                        style={{ backgroundImage: `url(${TEBackground})`, backgroundSize: '100% 100%', minHeight: '400px' }}
                    >
                        <Flex
                            column
                            center
                            bg={theme.colors.overlay}
                            width='100%'
                        >
                            <Text
                                weight='700'
                                size='2rem'
                                color={theme.colors.textSecondary}
                                style={{ borderBottom: `1px solid ${theme.colors.textSecondary}` }}
                            >
                                {'Tech Education'}
                            </Text>

                            <Text
                                align='center'
                                weight='700'
                                size='1rem'
                                color={theme.colors.textSecondary}
                            >
                                {'We`ll teach you the core skills you need to understand the word of technology'}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        style={{ backgroundImage: `url(${CEBackground})`, backgroundSize: '100% 100%', minHeight: '400px' }}
                    >
                        <Flex
                            column
                            center
                            bg={theme.colors.overlay}
                            width='100%'
                        >
                            <Text
                                weight='700'
                                size='2rem'
                                color={theme.colors.textSecondary}
                                style={{ borderBottom: `1px solid ${theme.colors.textSecondary}` }}
                            >
                                {'Curriculum Ethos '}
                            </Text>

                            <Text
                                align='center'
                                weight='700'
                                size='1rem'
                                color={theme.colors.textSecondary}
                            >
                                {'Swipe right to learn how our curriculum works'}
                            </Text>
                        </Flex>
                    </Flex>
                    <SetlifeCourses />
                </Flex>
            </>
        );
    }
}

