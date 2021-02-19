export default function firstUsersReducer(state=[], action){
    switch(action.type){
        case 'ADD_FIRST_USERS':
            return [...action.users]
        default:
            return state
    }
}