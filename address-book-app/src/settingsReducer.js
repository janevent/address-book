export default function settingsReducer(state = [], action){
    switch(action.type){
        case 'CHANGE_SETTINGS':
            console.log("in reducer")
            return action.nats 
        default:
            return state
    }
}