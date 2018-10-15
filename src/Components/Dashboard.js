import React, { Component } from 'react'
import '../Styles/Dashboard.css'
import DashboardLayout from './DashboardLayout'

export default class Dashboard extends Component {

  constructor() {
    super()
    this.sortFirstName = this.sortFirstName.bind(this);
    this.sortLastName = this.sortLastName.bind(this);
    this.sortStartDate = this.sortStartDate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  sortFirstName = () => {
    this.props.startSortByFirstName()
  };

  sortLastName = () => {
    this.props.startSortByLastName()
  };

  sortStartDate = () => {
    this.props.startSortByStartDate()
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      //if (event.target.value.length) {
      this.props.startSearchbyKeywords(event.target.value)
      //}
      event.preventDefault()
    }

    else if (event.key === "Backspace"
      && event.target.value
      && event.target.value.length === 1) {
      this.props.startSearchbyKeywords("")
    }
  }

  componentDidMount() {
    this.props.startLoadEmployeeList()
  }

  render() {

    if (Object.keys(this.props.EmployeeDashboard).length > 0) {
      let sortByFirstNameActive = this.props.EmployeeDashboard.sortBy != undefined && this.props.EmployeeDashboard.sortBy === "firstName" ? "active" : ""
      let sortByLastNameActive = this.props.EmployeeDashboard.sortBy != undefined && this.props.EmployeeDashboard.sortBy === "lastName" ? "active" : ""
      let sortByStartDateActive = this.props.EmployeeDashboard.sortBy != undefined && this.props.EmployeeDashboard.sortBy === "startDate" ? "active" : ""

      // Sort by
      if (this.props.EmployeeDashboard.sortBy != undefined) {
        if (this.props.EmployeeDashboard.sortBy === "firstName") {
          this.props.EmployeeDashboard.employees
            .sort(function (x, y) {
              return x.firstName.localeCompare(y.firstName)
            })
        }
        else if (this.props.EmployeeDashboard.sortBy === "lastName") {
          this.props.EmployeeDashboard.employees
            .sort(function (x, y) {
              return x.lastName.localeCompare(y.lastName)
            })
        }
        else if (this.props.EmployeeDashboard.sortBy === "startDate") {
          this.props.EmployeeDashboard.employees
            .sort(function (x, y) {
              return new Date(x.dateJoined) - new Date(y.dateJoined)
            })
        }
      }

      //Search
      let searchResult = []
      if (this.props.EmployeeDashboard.searchBy != undefined) {
        if ((this.props.EmployeeDashboard.employees.filter(x => x.firstName.toLowerCase().indexOf(this.props.EmployeeDashboard.searchBy.toLowerCase()) > -1)).length > 0) {
          searchResult = this.props.EmployeeDashboard.employees.filter(x => x.firstName.toLowerCase().indexOf(this.props.EmployeeDashboard.searchBy.toLowerCase()) > -1)
        }
        else if ((this.props.EmployeeDashboard.employees.filter(x => x.lastName.toLowerCase().indexOf(this.props.EmployeeDashboard.searchBy.toLowerCase()) > -1)).length > 0) {
          searchResult = this.props.EmployeeDashboard.employees.filter(x => x.lastName.toLowerCase().indexOf(this.props.EmployeeDashboard.searchBy.toLowerCase()) > -1)
        }
      }

      return (<div className="col-12">
        <h5>{this.props.EmployeeDashboard.companyInfo.companyName}</h5>
        <div className="row">
          <div className="col-6"> {this.props.EmployeeDashboard.companyInfo.companyMotto}</div>
          <div className="col-6"><span className="float-right"> Since {(new Date(this.props.EmployeeDashboard.companyInfo.companyEst)).toLocaleDateString()}</span></div>
        </div>
        <hr />
        <br />
        <div className="row">
          <div className="col-6">Our Employees</div>
          <div className="col-6">
            <span className="float-right">
              <div className="input-group">
                <div className="input-group-btn search-panel">
                  <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className={`dropdown-item ${sortByFirstNameActive}`} href="javascript:void(0)" onClick={() => this.sortFirstName()}>FirstName</a>
                      <a className={`dropdown-item ${sortByLastNameActive}`} href="javascript:void(0)" onClick={() => this.sortLastName()}>LastName</a>
                      <a className={`dropdown-item ${sortByStartDateActive}`} href="javascript:void(0)" onClick={() => this.sortStartDate()}>Start Date</a>
                    </div>
                  </div>
                </div>
                <input type="text" className="form-control" placeholder="Press 'Enter' to search"
                  onKeyDown={this.handleKeyPress} />
              </div>
            </span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">

            <div className="card-columns my-3">
              {
                searchResult.length > 0 ? searchResult.map((aEmployee, index) => <DashboardLayout key={index} aEmployee={aEmployee} />) : this.props.EmployeeDashboard.employees.map((aEmployee, index) => <DashboardLayout key={index} aEmployee={aEmployee} />)
              }
            </div>
          </div>
        </div>

      </div >)
    }
    else return null // show loading or error in reality

  }
}
