import * as actions from '../actions/usersActions';

export const initialState = {
    data: [],
    loading: false,
    hasErrors: false
}

export default function usersReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_USERS:
            return {...state, loading:true};
        case actions.GET_USERS_SUCCESS:
            return {data:action.payload, loading:false, hasErrors: false};
        case actions.GET_USERS_FAILURE:
            return {...state, loading: false, hasErros: true};
        default: return state;
    }
}