const addUsers = (users) => {
    return {
        type: 'ADD_USERS',
        users: users
    }
}

const fetchAndAddUsers = (users) => {
    return (dispatch) => {
        fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => {
            if(data.results){
                dispatch(addUsers(data.results))
            }else if(data.error){
                console.log(error)
            }
        })
        .catch(error => {
            console.log("error", error)
        })
    }
}
export default fetchAndAddUsers