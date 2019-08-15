import { createStore, combineReducers } from 'redux'

import authReducer from './reducers/auth.reducer'

const rootReducer = combineReducers({
  authReducer: authReducer
})

const store = createStore(rootReducer)

export default store