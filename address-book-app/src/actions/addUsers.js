const addUsers = (users) => {
    return {
        type: 'ADD_USERS',
        users: users
    }
}

const fetchAndAddUsers = ( n) => {
    return (dispatch) => {
        console.log(n)
        let url = (n===undefined ) ? 'https://randomuser.me/api/?results=50&inc=name,email,picture,id,login,nat' :
        `https://randomuser.me/api/?results=50&inc=name,email,picture,id,login,nat${n}`
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.results){
                console.log(data.results)
                dispatch(addUsers(data.results))
                
            }else if(data.error){
                console.log(data.error)
            }
        })
        .catch(console.log)
    }
}
export default fetchAndAddUsers