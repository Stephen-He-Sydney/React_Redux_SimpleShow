import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import EmployeeDashboard from './EmployeeDashboard'
const rootReducer = combineReducers({
    form: formReducer,
    EmployeeDashboard
});

export default rootReducer