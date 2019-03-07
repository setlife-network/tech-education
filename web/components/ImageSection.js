import React from 'react';
import styled from 'styled-components'
import is from 'styled-is'

import Flex from './Flex';
import Text from './Text';

import theme from '../styles/theme';

const HoverableImageSection = styled(Flex)`
    ${is('onClick')`
        transition: all 0.35s;
        cursor: pointer;
        &:hover {
        }
    `}
`

const ImageSection = ({
    imageUrl,
    onClick,
    subtitle,
    title,
}) => {
    return (
        <HoverableImageSection
            center
            column
            height={['50vh', '600px']}
            width='100%'
            style={{
                position: 'relative',
                borderBottom: '1px white solid',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${imageUrl})`
            }}
            onClick={onClick}
        >
            <Flex position='absolute' minHeight='100%' minWidth='100%' bg={theme.colors.overlay} />
            <Flex
                column
                center
                style={{ position: 'absolute' }}
                my='auto'
            >
                <Text
                    weight='700'
                    size='2rem'
                    color={theme.colors.textSecondary}
                    style={{ borderBottom: `1px solid ${theme.colors.textSecondary}` }}
                >
                    {title}
                </Text>

                <Text
                    align='center'
                    weight='700'
                    size='1rem'
                    color={theme.colors.textSecondary}
                >
                    {subtitle}
                </Text>
            </Flex>
        </HoverableImageSection>

    );
}

ImageSection.defaultProps = {
    onClick: null
}

export default ImageSection