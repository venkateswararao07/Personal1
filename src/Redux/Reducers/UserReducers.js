import { FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCESS } from "../actions/ActionType";


const initialState = {
    users:[],
    error:'',
    isLoadig:false
}
const usersReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST :
            return{...state,isLoadig:true}
            case FETCH_USERS_SUCESS:
                return {isLoadig:false,users:action.data,error:''}
                case FETCH_USERS_FAIL:
                    return{isLoadig:false,users:[],error:action.data}
                    default:
                        return state;
    }


}
export default usersReducer;