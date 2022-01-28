import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    bold/normal
    uppercase/lowecase
*/

export const Text = styled.p`
    color: ${props => props.color};
    text-align: ${props => props.alignment};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'normal'}
    padding: 5px;

`

Text.defaultProps = {
    color: theme.colors.black,
    alignment: 'left',
    size: theme.sizes.small,
    weight: 100,
    uppercase: false,
}

export default Text
