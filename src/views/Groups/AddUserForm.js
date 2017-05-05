import React, { Component } from 'react';

class AddUserForm extends Component {

    submitClickHandler = () => {
        let name = document.getElementById("hf-name").value;
        let email = document.getElementById("hf-email").value;
        let paypalEmail = document.getElementById("hf-paypal-email").value;
        let phone = document.getElementById("hf-phone").value;
        let isInCharge = document.getElementById("radio1").value;
        let user = {};
        user.name = name;
        user.paypalInfo = paypalEmail;
        user.email = email;
        user.phone = phone;
        user.isInCharge = isInCharge
        this.props.onAddUser(user);
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <form action="" method="post" className="form-horizontal">
                        <div className="form-group row">
                            <label className="col-md-3 form-control-label" htmlFor="hf-name">Name</label>
                            <div className="col-md-9">
                                <input type="name" id="hf-name" name="hf-name" className="form-control" placeholder="Enter Name.."/>
                                <span className="help-block">Please enter your name</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 form-control-label" htmlFor="hf-email">Email</label>
                            <div className="col-md-9">
                                <input type="email" id="hf-email" name="hf-email" className="form-control" placeholder="Enter Email.."/>
                                <span className="help-block">Please enter your email</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 form-control-label" htmlFor="hf-paypal-email">Paypal Email</label>
                            <div className="col-md-9">
                                <input type="email" id="hf-paypal-email" name="hf-paypal-email" className="form-control" placeholder="Enter Paypal Email.."/>
                                <span className="help-block">Please enter your paypal email</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 form-control-label" htmlFor="hf-Phone-Number">Phone No:</label>
                            <div className="col-md-9">
                                <input type="number" id="hf-phone" name="hf-phone" className="form-control" placeholder="Enter Phone Number.."/>
                                <span className="help-block">Please enter your phone number</span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 form-control-label" htmlFor="hf-Phone-Number">Is Incharge:</label>
                            <div className="col-md-9">
                                <div className="radio">
                                    <label htmlFor="radio1">
                                        <input type="radio" id="radio1" name="radios" value="1"/>&nbsp;Yes
                                    </label> &nbsp;
                                    <label htmlFor="radio2">
                                        <input type="radio" id="radio1" name="radios" value="0"/>&nbsp;No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button type="submit" onClick={this.submitClickHandler} className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Save</button>{' '}
                    <button type="reset" onClick={this.props.onCancel} className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Cancel</button>
                </div>
            </div>
        )
    }
}

export default AddUserForm;