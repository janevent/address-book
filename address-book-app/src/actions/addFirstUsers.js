const addFirstUsers = (users) => {
    return {
        type: 'ADD__FIRST_USERS',
        users: users
    }
}

const fetchAndAddFirstUsers = ( n) => {
    return (dispatch) => {
        console.log(n)
        let url = (n===undefined ) ? 'https://randomuser.me/api/?results=50&inc=name,email,picture,id,login,nat' :
        `https://randomuser.me/api/?results=50&inc=name,email,picture,id,login,nat${n}`
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