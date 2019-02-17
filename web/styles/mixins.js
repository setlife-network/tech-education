import { css } from 'styled-components'
import is from 'styled-is'
import { themeGet, style } from 'styled-system'
import { shade, transitions } from 'polished'

export const clickableBg = css`
    ${p => transitions(
        'background-color',
        `${p.theme.durationShort} ease-in-out`
    )}
    &:hover {
        background-color: ${p => shade(0.05, p.theme.colors[p.bg])};
    }
    &:active {
        background-color: ${p => shade(0.1, p.theme.colors[p.bg])};
    }

    ${is('transparent')`
        &:hover {
            background-color: ${p => shade(0.05, p.theme.colors[p.color])};
            color: ${themeGet('colors.white')};
        }
        &:active {
            background-color: ${p => shade(0.1, p.theme.colors[p.color])};
            color: ${themeGet('colors.white')};
        }
    `}
`

export const clickableColor = css`
    ${p => transitions(
        'color',
        `${p.theme.durationShort} ease-in-out`
    )}
    &:hover {
        color: ${p => shade(0.05, p.theme.colors[p.color])};
    }
    &:active {
        color: ${p => shade(0.1, p.theme.colors[p.color])};
    }
`

export const navbarWidth = style({
    prop: 'navbarWidth',
    cssProperty: 'width',
    key: 'navbar',
    transformValue: n => n + 'px'
})

export const navbarOffset = style({
    prop: 'navbarOffset',
    cssProperty: 'marginLeft',
    key: 'navbar',
    transformValue: n => n + 'px'
})