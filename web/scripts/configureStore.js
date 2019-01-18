import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(isProduction) {
    let store

    if (isProduction) {
        store = createStore(
            rootReducer,
            applyMiddleware(thunk)
        )
    } else {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        
        store = createStore(
            rootReducer,
            composeEnhancers(
                applyMiddleware(thunk)
            )
        )

        if (module.hot) {
            module.hot.accept('../reducers', () => {
                const nextRootReducer = require('../reducers').default
                store.replaceReducer(nextRootReducer)
            })
        }
    }

    return store
}