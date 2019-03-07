import PropTypes from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is'
import {
    alignItems,
    alignSelf,
    justifyContent,
    justifySelf,
    alignContent,
    style
} from 'styled-system'
import Box from './Box'

const flexDirection = style({
    prop: 'direction',
    cssProperty: 'flexDirection'
})

const flexBasis = style({
    prop: 'basis',
    cssProperty: 'flexBasis'
})

const Flex = styled(Box)`
    display: flex;
    ${flexDirection};
    ${flexBasis};
    ${alignItems};
    ${alignSelf};
    ${justifyContent};
    ${justifySelf};
    ${alignContent};
    
    ${is('wrap')`
        flex-wrap: wrap;
    `}

    ${is('row')`
        flex-direction: row;
    `}

    ${is('row', 'reverse')`
        flex-direction: row-reverse;
    `}

    ${is('column')`
        flex-direction: column;
    `}

    ${is('column', 'reverse')`
        flex-direction: column-reverse;
    `}

    /* Misc */
    ${is('center')`
        align-items: center;
        justify-content: center;
    `}

    ${is('order')`
        order: ${p => p.order};
    `}

    
`

Flex.propTypes = {
    ...alignItems.propTypes,
    ...alignSelf.propTypes,
    ...alignContent.propTypes,
    ...justifyContent.propTypes,
    ...justifySelf.propTypes,
    ...flexDirection.propTypes,
    ...flexBasis.propTypes,
    row: PropTypes.bool,
    column: PropTypes.bool,
    reverse: PropTypes.bool,
    wrap: PropTypes.bool,
    center: PropTypes.bool,
    order: PropTypes.number
}

export default Flex