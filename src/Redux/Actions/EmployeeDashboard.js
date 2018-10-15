import { ActionTypes } from '../../Constants/ActionTypes'

//Load list
export function startLoadEmployeeList() {
    return (dispatch) => {
        dispatch(loadEmployeeList())
    }
}

export function loadEmployeeList() {
    let EmployeeDashboard = {}
    return {
        type: ActionTypes.GET_EMPLOYEE_LIST,
        EmployeeDashboard
    }
}

//Load detail
export function startLoadEmployeeDetailById(id) {
    return (dispatch) => {
        dispatch(loadEmployeeDetailById(id))
    }
}

export function loadEmployeeDetailById(id) {
    let EmployeeDashboard = {}
    return {
        type: ActionTypes.GET_EMPLOYEE_DETAIL,
        id,
        EmployeeDashboard
    }
}

//Sort by FirstName
export function startSortByFirstName() {
    return (dispatch) => {
        dispatch(sortByFirstName())
    }
}

export function sortByFirstName() {
    let EmployeeDashboard = {sortBy: "firstName"}
    return {
        type: ActionTypes.SORT_BY_FIRSTNAME,
        EmployeeDashboard
    }
}

//Sort by LastName
export function startSortByLastName() {
    return (dispatch) => {
        dispatch(sortByLastName())
    }
}

export function sortByLastName() {
    let EmployeeDashboard = { sortBy: "lastName" }
    return {
        type: ActionTypes.SORT_BY_LASTNAME,
        EmployeeDashboard
    }
}

//Sort by start date
export function startSortByStartDate() {
    return (dispatch) => {
        dispatch(sortByStartDate())
    }
}

export function sortByStartDate() {
    let EmployeeDashboard = { sortBy: "startDate" }
    return {
        type: ActionTypes.SORT_BY_STARTDATE,
        EmployeeDashboard
    }
}

//Search by keywords
export function startSearchbyKeywords(keywords) {
    return (dispatch) => {
        dispatch(searchbyKeywords(keywords))
    }
}

export function searchbyKeywords(keywords) {
    let EmployeeDashboard = { searchBy: keywords }
    return {
        type: ActionTypes.SEARCH_BY_KEYWORDS,
        EmployeeDashboard
    }
}