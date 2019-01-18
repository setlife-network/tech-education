import React from 'react';

import Flex from './Flex';
import Text from './Text';
import Card from './Card';

import theme from '../styles/theme';

export default class Course extends React.Component {
    render() {
        const { name, version, description } = this.props
        return (
            <>
                <Flex>
                    <Card
                        depth={9}
                        width='100%'
                        bg={theme.colors.background}
                        p='auto'
                    >
                        <Flex row>
                            <Text
                                weight='700'
                                size='1.5rem'
                                align='left'
                                color={theme.colors.textPrimary}
                                mx='auto'
                            >
                                {name}
                            </Text>
                            <Card
                                bg={theme.colors.overlay}
                                width='80px'
                                height='80px'
                                minWidth='80px'
                                minHeight='80px'
                                mx='auto'
                                my='0.5rem'
                                borderRadius={50}
                                depth={7}
                            >
                                <Text align='center' color={theme.colors.textSecondary}>
                                    {version}
                                </Text>
                            </Card>
                        </Flex>
                    </Card>
                </Flex>

                <Flex
                    width='100%'
                    center
                    bg={theme.colors.charcoal}
                >
                    <Text
                        color={theme.colors.textSecondary}
                        weight='500'
                        size='1rem'
                        align='left'
                        style={{ whiteSpace: 'pre-line' }}
                        mx='1rem'
                    >
                        {description}
                    </Text>
                </Flex>

            </>
        );
    }
}
