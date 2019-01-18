import styled from 'styled-components'
import {
    borderRadius
} from 'styled-system'
import Card from './Card'

const Image = styled(Card)(
    {
        maxWidth: '100%',
    },
    borderRadius
)

Image.propTypes = {
    ...borderRadius.propTypes
}

Image.defaultProps = {
    as: 'img',
    height: 'auto'
}

export default Image 