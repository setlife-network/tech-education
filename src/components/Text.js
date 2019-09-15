import styled from 'styled-components';
import theme from '../styles/theme';

/*
properties:
    bold/normal
    uppercase/lowecase
*/

export const Text = styled.p`
    font-size: ${props => props.size};
    text-align: ${props => props.alignment};
    color: ${props => props.color};
    font-weight: ${props => props.weight};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'normal'}
    padding: 5px;

`

Text.defaultProps = {
    blue: false,
    bold: false,
    uppercase: false,
    color: theme.colors.black,
    alignment: 'left',
    fontSize: theme.sizes.small


}

export default Text
