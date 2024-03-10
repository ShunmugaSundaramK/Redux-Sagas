import { GET_USERS_SUCCESS, POST_USERS_FAILURE, POST_USERS_REQUEST, POST_USERS_SUCCESS } from "./Action"

export const myFirstReducer = (state={users:[]}, action) => {
    switch(action.type){
        case GET_USERS_SUCCESS  : return{
            ...state,
            users:action.users
        }
        default : return state
    }
}


const postInitialState = {
    loading: false,
    data: null,
    error: null
};

export const postReducer = (state = postInitialState, action) => {
    switch(action.type){
        case POST_USERS_REQUEST : return {
            loading : true,
            data : null,
            error : null
        }
        case POST_USERS_SUCCESS : return {
            loading : false,
            data : action.payload,
            error : null
        }
        case POST_USERS_FAILURE : return {
            loading : false,
            data : null,
            error : action.payload
        }
        default : return state
    }
}

// export default myFirstReducer