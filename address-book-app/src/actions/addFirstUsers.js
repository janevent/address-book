const addFirstUsers = (users) => {
    return {
        type: 'ADD_FIRST_USERS',
        users: users
    }
}

const fetchAndAddFirstUsers = ( n) => {
    return (dispatch) => {
        console.log(n)
        let url = (n===undefined ) ? 'https://randomuser.me/api/?results=50&inc=name,email,picture,login,location,cell,phone,nat' :
        `https://randomuser.me/api/?results=50&inc=name,email,picture,login,location,cell,phone,nat${n}`
        console.log("url", url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.results){
                console.log(data.results)
                dispatch(addFirstUsers(data.results))
                
            }else if(data.error){
                console.log(data.error)
            }
        })
        .catch(console.log)
    }
}
export default fetchAndAddFirstUsers