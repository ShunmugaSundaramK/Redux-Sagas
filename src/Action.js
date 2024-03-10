export const GET_USERS_FETCH = "GET_USERS_FETCH"
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"
export const POST_USERS_REQUEST = "POST_USERS_REQUEST"
export const POST_USERS_SUCCESS = "POST_USERS_SUCCESS"
export const POST_USERS_FAILURE = "POST_USERS_FAILURE"


export const getUsersFetch = () => {
    return{
        type : GET_USERS_FETCH
    }
}

export const postUsersRequest = (postData) => {
    return{
        type: POST_USERS_REQUEST,
        payload : postData
    }
}

export const postUsersSuccess = (users) => {
    return{
        type: POST_USERS_SUCCESS,
        payload : users
    }
}

export const postUsersFailure = (error) => {
    return{
        type: POST_USERS_FAILURE,
        payload : error
    }
}