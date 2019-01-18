import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { themeGet } from 'styled-system'
import is from 'styled-is'
import { transitions } from 'polished'
import Transition from 'react-transition-group/Transition'
import { withRouter } from 'react-router-dom'
import { X } from 'styled-icons/feather/X.cjs'

const Backdrop = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${themeGet('colors.overlay')};
    ${p => transitions(
        'background-color',
        `${p.theme.durationShort} ease-in-out`
    )}
`

const Modal = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: ${themeGet('zIndexModal')};
    visibility: hidden;
    overflow: hidden;
    outline: 0;
    display: flex;
    align-items: center;

    ${is('opened')`
        visibility: visible;
        overflow-x: hidden;
        overflow-y: auto;
    `}

    opacity: ${p => p.theme.transitionOpacity[p.state]};
    ${p => transitions(
        'opacity',
        `${p.theme.durationShort} ease-in-out`
    )}
`

const ExitIcon = styled(X)`
    height: 24px;
    width: 24px;
    color: ${themeGet('charcoal')};
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
`;

const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: auto;
    ${''/* max-width: 90%; */}
    margin: auto;
    pointer-events: auto;
    background-color: ${themeGet('colors.white')};
    border-radius: ${themeGet('borderRadius')};
    box-shadow: ${themeGet('shadow5')};
    outline: 0;
`

class ModalComponent extends Component {
    static propTypes = {
        opened: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        children: PropTypes.any.isRequired
    }

    constructor(props) {
        super(props)
        if (!this.container && typeof document !== 'undefined') {
            this.container = document.createElement('div')
            document.body.appendChild(this.container)
        }
    }

    componentDidMount() {
        this.attachEventHandlers()
        // Router.events.on('routeChangeStart', this.props.onClose.bind(null, false))
    }

    componentDidUpdate() {
        this.attachEventHandlers()
    }

    attachEventHandlers() {
        if (this.props.opened) {
            // prevent page from scrolling when modal is opened
            document.body.style.overflow = 'hidden'
            document.addEventListener('keyup', this.onKeyUp)
        } else {
            document.body.style.overflow = null
            document.removeEventListener('keyup', this.onKeyUp)
            // Router.events.off('routeChangeStart', this.props.onClose.bind(null, false))
        }
    }

    onKeyUp = ({ keyCode }) => {
        if (keyCode === 27) {
            this.props.onClose()
        }
    }

    render() {
        const {
            onClose,
            opened,
            children
        } = this.props

        if (!this.container) return null

        return createPortal(
            <Transition
                timeout={200}
                in={opened}
            >
                {state => (
                    <Modal
                        opened={opened || state === 'exiting'}
                        state={state}
                    >
                        <Backdrop onClick={onClose} />
                        <ModalContent>
                            <ExitIcon onClick={onClose} />
                            {children}
                        </ModalContent>
                    </Modal>
                )}
            </Transition>,
            this.container
        )
    }
}

export default withRouter(ModalComponent)