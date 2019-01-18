import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

const isProduction = process.env.NODE_ENV === 'production'

// Styled components
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

// Main App component
import App from 'components/App'

// redux setup
import configureStore from 'scripts/configureStore'

const store = configureStore(isProduction)

// Hot reloading setup for development
const appMount = document.getElementById('app-mount-point');

const renderContainer = Component => {
    ReactDOM.render(
        <AppContainer>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router>
                        <Component />
                    </Router>
                </Provider>
            </ThemeProvider>
        </AppContainer>,
        appMount
    )
}

renderContainer(App)

if (module.hot) {
    module.hot.accept();
    module.hot.accept('components/App', () => {
        const NextApp = require('components/App').default
        renderContainer(NextApp)
    });
} 