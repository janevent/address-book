export default function appReducer(state=[], action){
    switch(action.type){
        case 'ADD_USERS':
            console.log('ADD_USERS action', action.users)
            return [...state, ...action.users]
        default:
            return state
    }
}