import { combineReducers } from 'redux'
import Jembut from './Jembut'
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
  Jembut
})
export default todoApp;