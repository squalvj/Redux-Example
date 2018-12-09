const INITIAL_STATE = {
   bulu: 1
}

const Action = {
   ADD_JEMBUT: 'ADD_JEMBUT'
}

const ACTION_HANDLERS = {
   ADD_JEMBUT: (state) => ({
      ...state,
      bulu: state.bulu+=1
   })
}

export default function Jembut(state = INITIAL_STATE, action) {    
   const handler = ACTION_HANDLERS[action.type]
   state = action.type === Action.RESET_STATE ? INITIAL_STATE : state;
   return handler
       ? handler(state, action)
       : state
}
