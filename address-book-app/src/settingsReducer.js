export default function settingsReducer(state = [], action){
    switch(action.type){
        case 'CHANGE_SETTINGS':
            console.log("in reducer", action.nats)
            return action.nats 
        default:
            return state
    }
}