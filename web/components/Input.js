import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'

const StyledInput = styled.input.attrs({
    type: 'text'
})`
    ${is('disabled')`

    `}
    background: none;
    color: textSecondary;
    font-size: 18px;
    padding: 10px 5px 10px 5px;
    display: block;
    min-width: 290px;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid lightBlue;
    font-family: Nunito,sans-serif
`

const StyledTextArea = styled.textarea.attrs({
    type: 'text'
})`
    ${is('disabled')`

    `}
    background: none;
    color: textSecondary;
    font-size: 18px;
    padding: 10px 5px 10px 5px;
    display: block;
    min-height: 150px;
    min-width: 290px;
    border: none;
    border-radius: 0;
    border: 1px solid lightBlue;
    font-family: Nunito,sans-serif
`

const Input = ({
    // field, // { name, value, onChange, onBlur }
    // form: { touched, errors },
    ...props
}) => (
    <div>
        {props.textArea && (
            <StyledTextArea
                // {...field}
                {...props}
            />
        )}
        {!props.textArea && (
            <StyledInput
                // {...field}
                {...props}
            />
        )}
    </div>
)

Input.propTypes = {
    // field: PropTypes.object.isRequired,
    // form: PropTypes.object.isRequired
}

export default Input