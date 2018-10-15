import React, { Component } from 'react'
import DetailedModal from './DetailedModal'

export default class DashboardLayout extends Component {


  render() {
    const aEmployee = this.props.aEmployee
    return (
      <div className="card" data-toggle="modal" data-target={`#${aEmployee.id}`}>
        <div className="row no-gutters">
          <div className="col-auto">
            <img src={aEmployee.avatar} className="img-fluid" alt="" />
          </div>
          <div className="col">
            <div className="card-block px-2">
              <h4 className="card-title">{aEmployee.firstName} {aEmployee.lastName}</h4>
              <p className="card-text">{aEmployee.bio}</p>
            </div>
          </div>
        </div>
        <DetailedModal modalId={`#${aEmployee.id}`} aEmployee={aEmployee} />
      </div>
    )
  }
}
