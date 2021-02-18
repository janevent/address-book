export default function settingsReducer(state = [], action){
    switch(action.type){
        case 'CHANGE_SETTINGS':
            return action.settings 
        default:
            return state
    }
}