import React from 'react'

export default (props) => {
    const id = props.modalId.replace("#", "")
    return (
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-auto">
                                    <img src={props.aEmployee.avatar} className="img-fluid" alt="" />
                                    <p className="card-text">{props.aEmployee.jobTitle}</p>
                                    <p className="card-text">{props.aEmployee.age}</p>
                                    <p className="card-text">{(new Date(props.aEmployee.dateJoined)).toLocaleDateString()}</p>
                                </div>
                                <div className="col">
                                    <div className="card-block px-2">
                                        <h4 className="card-title">{props.aEmployee.firstName} {props.aEmployee.lastName}</h4>
                                        <p className="card-text">{props.aEmployee.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
