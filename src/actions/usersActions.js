import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUsers = () =>({
    type: GET_USERS
});
export const getUsersSuccess = data => ({
    type:GET_USERS_SUCCESS,
    payload: data
});
export const getUsersFailure = () => ({
    type: GET_USERS_FAILURE
});

export function fetchUsers(){
    return async (dispatch) =>{
        dispatch(getUsers())
        try{
            const qy1 = "https://jsonplaceholder.typicode.com/users";
            const qy2 = "https://jsonplaceholder.typicode.com/photos";

            const req1 = axios.get(qy1);
            const req2 = axios.get(qy2);

            const res = await axios
                                .all([req1,req2])
                                .then(axios.spread((...res)=>[res[0].data,res[1].data]))
            const data = await res;
            dispatch(getUsersSuccess(data))

        } catch(err){
            console.log(err)
            dispatch(getUsersFailure());
        };
    };
};