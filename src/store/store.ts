import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer, { RootState } from './root-reducer'

const store = createStore<RootState, any, any, any>(
  rootReducer,
  applyMiddleware(logger)
)

export default store
