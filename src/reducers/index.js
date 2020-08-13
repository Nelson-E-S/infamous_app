import {combineReducers} from 'redux';
import usersReducers from './usersReducer';

const rootReducer = combineReducers({
    usersDataSet: usersReducers
});

export default rootReducer;