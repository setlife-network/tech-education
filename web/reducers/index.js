import { combineReducers } from 'redux'

import contentManagement from './contentManagement'
import environment from './environment'

export default combineReducers({
    contentManagement,
    environment
})
