import { ActionTypes } from '../../Constants/ActionTypes'
import employeeList from '../../Data/sample-data.json'

function EmployeeDashboard(state = employeeList, action) {
    switch (action.type) {
        case ActionTypes.SORT_BY_FIRSTNAME: 
        case ActionTypes.SORT_BY_LASTNAME: 
        case ActionTypes.SORT_BY_STARTDATE: 
        case ActionTypes.SEARCH_BY_KEYWORDS: 
        {
            return Object.assign({}, state, action.EmployeeDashboard)
        } 
        case ActionTypes.GET_EMPLOYEE_DETAIL: 
        {
            return Object.assign({}, action.EmployeeDashboard.employees.filter((aEmp) => aEmp.id === action.id)[0])
        }
        default: return state
    }
}

export default EmployeeDashboard