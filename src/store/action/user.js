export const addUser = (user) => {
    return {
        type:"ADD_USER",
        user : user
    }
};

export const deleteUser = (user) => {
    return {
        type :"REMOVE_USER",
        user : user
    }
}

export const UpdatedUser = (user) => {
    return {
        type:"UPDATE_USER",
        user:user
    }
}

export const selectedUser = (user)=>{
    return {
        type:"SELECTED_USER",
        user:user
    }
}