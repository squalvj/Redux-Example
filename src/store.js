import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk';
import allReducer from './reducer'
const store = createStore(
   allReducer,
   compose(
      applyMiddleware(ReduxThunk),
      global.devToolsExtension ? global.devToolsExtension() : f => f
    )
 );

 export default store;