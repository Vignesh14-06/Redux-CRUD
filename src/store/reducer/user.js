
const initialState = {
    users: [],
    selectedUser:{}
}
const UserReducer = (state = initialState , action) => {
  switch (action.type) {
    case "ADD_USER":
        return {
            ...state,
            users:[...state.users,action.user]
        }
        case "REMOVE_USER":
            return {
                ...state,
                users:state.users.filter((data)=>data.id !== action.user.id)
            }
        case "UPDATE_USER":
            return{
                ...state,
                users:state.users.map((data)=>data.id === action.user.id ? action.user : data)
            }   
        case "SELECTED_USER":
            return {
                ...state,
                selectedUser:action.user
            }     
        default:
            return state;
  }
}

export default UserReducer;
