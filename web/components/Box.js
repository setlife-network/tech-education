import styled from 'styled-components'
import {
    width,
    height,
    space,
    color,
    flex,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    display,
    position,
    top,
    right,
    bottom,
    left
} from 'styled-system'

const css = props => props.css

const Box = styled('div')(
    color,
    space,
    width,
    height,
    flex,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    display,
    position,
    top,
    right,
    bottom,
    left,
    css
)

Box.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...color.propTypes,
    ...flex.propTypes,
    ...minWidth.propTypes,
    ...maxWidth.propTypes,
    ...minHeight.propTypes,
    ...maxHeight.propTypes,
    ...display.propTypes,
    ...position.propTypes,
    ...top.propTypes,
    ...right.propTypes,
    ...bottom.propTypes,
    ...left.propTypes
}

export default Box