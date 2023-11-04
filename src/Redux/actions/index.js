
import { BUY_LAPTOP, FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCESS } from "./ActionType"
import axios from 'react'
 export const buyLaptop = () =>{
    
    return{
        type: BUY_LAPTOP
    }
}

export const fetchUserRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }

}

export const fetchUserSucess = (users) =>{
    return{
        type:FETCH_USERS_SUCESS,
        data: users
    }

}
export const fetchUserFail = (error)=>{
    return{
        type:FETCH_USERS_FAIL,
        data:error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            let users = response.data.map(user=>user.id);
            dispatch(fetchUserSucess(users))
        })
        .catch(error =>{
            dispatch(fetchUserFail(error))
        })
    }
}
