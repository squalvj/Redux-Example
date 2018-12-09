import { combineReducers } from 'redux'
import Jembut from './Jembut'
import { reducer as reduxFormReducer } from 'redux-form';
const initState = {
   anjing: 1,
   nama: 'goblok'
}

function tot(state = initState, action) {
   switch (action.type) {
     case 'ADD_TODO':
       return {...state, anjing: state.anjing+=1}
     default:
       return state;
   }
 }
const todoApp = combineReducers({
  tot,
  Jembut,
  //NAMANYA HARUS FORM INI ATURAN DARI REDUX FORM
  form: reduxFormReducer, // mounted under "form"
})
export default todoApp;