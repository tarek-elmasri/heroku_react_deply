export const initialValue = {
  User: {},
  isAuthenticated: null
}

export const reducer= (state,action) =>{
  switch(action.type){
    case 'auth_user':
      return {...state , User: action.data, isAuthenticated:true}

    case 'unAuth_user':
      return {...state, User: {} , isAuthenticated: false}
    default:
      return state
  }
}

export default reducer;