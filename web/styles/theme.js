export default {
    // styled-system breakpoints
    breakpoints: ['600px', '900px', '1200px', '1800px'],
    // breakpoints for Col component and media.js
    devices: {
        mobile: 599,
        tabletPortrait: 600,
        tabletLandscape: 900,
        desktop: 1200,
        desktopBig: 1800
    },
    // Box shadows (used in Card component)
    shadows: {
        1: '0px 1.5px 8px rgba(0,0,0,0.07)',
        2: '0px 2px 11px rgba(0,0,0,0.10)',
        3: '0px 3px 16px rgba(0,0,0,0.12)',
        4: '0px 4px 21px rgba(0,0,0,0.14)',
        5: '0px 5px 25px rgba(0,0,0,0.14)',
        6: '-2px 0px 10px rgba(0,0,0,0.5)',
        7: '1px 0px 5px rgba(0,0,0,0.65)',
        8: '1px 0px 5px 0px rgba(136,136,136, 0.8)',
        9: '4px 4px 4px -1px rgba(136,136,136, 0.8)'
    },
    // Colors (styled-system)
    colors: {
        white: '#ffffff',
        background: '#F6F7F9',
        border: '#ECEFF3',
        lightGrey: '#C9D6E2',
        grey: '#B5B5B5',
        charcoal: '#2E497A',
        purple: '#C15BEE',
        blue: '#1C9EF6',
        lightBlue: '#8CC3E6',
        veryLightBlue: '#CCEDFF',
        darkBlue: '#1373BD',
        green: '#2BC094',
        yellow: '#F5D76E',
        red: '#F93B6A',
        facebook: '#32529F',
        overlay: 'rgba(0,0,0,0.5)',
        transparent: 'transparent',
        bottomColor: '#3B3B3B',

        primary: '#eceff1',
        primaryLight: '#ffffff',
        primaryDark: '#babdbe',
        secondary: '#b3e5fc',
        secondaryLight: '#e6ffff',
        secondaryDark: '#82b3c9',
        textPrimary: '#000000',
        textSecondary: '#000000',
        accent: '#F93B6A'
    },
    gradients: {
        vertical: 'linear-gradient(#1C9EF6, #0ACFFE)',
        horizontal: 'linear-gradient(90deg, #1C9EF6, #0ACFFE)',
        green: 'linear-gradient(#84FAB0, #2BC094)'
    },
    // Fonts (styled-system)
    fonts: {
        display1: {
            // fontSize: '12rem',
            fontSize: 72,
            fontWeight: 400,
        },
        display2: {
            // fontSize: '11rem',
            fontSize: 60,
            fontWeight: 400,
        },
        display3: {
            // fontSize: '9rem',
            fontSize: 54,
            fontWeight: 400,
        },
        display4: {
            // fontSize: '7rem',
            fontSize: 48,
            fontWeight: 400,
        },
        h1: {
            // fontSize: '3.75rem',
            fontSize: 30,
            fontWeight: 600,
        },
        h2: {
            // fontSize: '3rem',
            fontSize: 24,
            fontWeight: 600,
        },
        h3: {
            // fontSize: '2.5rem',
            fontSize: 20,
            fontWeight: 600,
        },
        h4: {
            // fontSize: '2rem',
            fontSize: 16,
            fontWeight: 600,
        },
        h5: {
            // fontSize: '1.75rem',
            fontSize: 14,
            fontWeight: 600,
        },
        h6: {
            // fontSize: '1.5rem',
            fontSize: 12,
            fontWeight: 600,
        }
    },
    // tags for styled-components `as` polymorphic prop
    tags: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        display1: 'h1',
        display2: 'h2',
        display3: 'h3',
        display4: 'h4',
    },
    // Nav Bar
    navbar: [100, 240],
    // Spacing (styled-system)
    space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    // Transitions
    durationShort: '200ms',
    durationLong: '450ms',
    transitionOpacity: {
        entering: 1,
        entered: 1,
        exiting: 0,
        exited: 0
    },
    // Z Index
    zIndexModal: 999,
    zIndexModalBackdrop: 1000,
}