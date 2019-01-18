import styled from 'styled-components'
import {
    style,
    space,
    color,
    lineHeight,
    letterSpacing,
    fontFamily,
    variant,
    display,
    opacity
} from 'styled-system'
import React from 'react';

const variants = variant({
    key: 'fonts'
})

const align = style({
    prop: 'align',
    cssProperty: 'textAlign'
})

const weight = style({
    prop: 'weight',
    cssProperty: 'fontWeight'
})

const size = style({
    prop: 'size',
    cssProperty: 'fontSize'
})

const whiteSpace = style({
    prop: 'whiteSpace',
    cssProperty: 'white-space'
})

const Text = styled.p.attrs({
    as: p => p.theme.tags[p.variant]
})`
    ${align};
    ${color};
    ${fontFamily};
    ${size};
    ${letterSpacing};
    ${lineHeight};
    ${space};
    ${variants};
    ${weight};
    ${display};
    ${opacity};
    ${whiteSpace};
    ${props => props.css};
`

Text.propTypes = {
    ...align.propTypes,
    ...color.propTypes,
    ...fontFamily.propTypes,
    ...letterSpacing.propTypes,
    ...lineHeight.propTypes,
    ...space.propTypes,
    ...size.propTypes,
    ...weight.propTypes,
    ...display.propTypes,
    ...opacity.propTypes,
    ...whiteSpace.propTypes
}

Text.defaultProps = {
    color: 'charcoal',
    size: 16,
    lineHeight: 1.6,
    letterSpacing: '0.025rem',
    fontFamily: 'Nunito,sans-serif',
}

export default Text