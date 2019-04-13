import * as actionTypes from "../Action/types";

let initialState = {
  data: []
};


export const deleteUser = (state, action) => {
    console.log(action.data)
const user=state.data;

console.log(user)
user.splice(action.data,1);
console.log(user)
  return {
    ...state,
    data: user
  };
};

const reducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case 'data':
    return {...state,data:action.data}
      console.log(`i am reducer`);
    case 'delete':
      return deleteUser(state, action);
    default:
      return state;
  }
};

export default reducer;
