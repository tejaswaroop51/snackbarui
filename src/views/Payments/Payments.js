/**
 * Created by tvankada on 5/5/17.
 */

/**
 * Created by tvankada on 5/5/17.
 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import axios from 'axios';


class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            freqSuccess: false,
        };
    }

    componentWillMount = () => {

    }

    submitClickHandler = () => {
        let self = this;
        let amount = document.getElementById("amount").value;
        axios.post('http://localhost:4000/snackbar/addPayment',{amount: amount, isRecurring: 0, frequency: 0}).then(function(response){
            document.getElementById("amount").value = '';
            self.setState({success: true});

        }).catch(function(error){
            //Some error occurred
        })
    }

    submitHandler = () => {
        let self = this;
        let amount = document.getElementById("freqAmount").value;
        let frequency = document.getElementById("frequency").value;
        axios.post('http://localhost:4000/snackbar/addPayment',{amount: amount, isRecurring: 1, frequency: frequency}).then(function(response){
            document.getElementById("freqAmount").value = '';
            document.getElementById("frequency").value='';
            self.setState({freqSuccess: true});

        }).catch(function(error){
            //Some error occurred
        })
    }


    render() {
        let showMessage= '';
        if(this.state.success) {
            showMessage = (<button type="button" className="btn btn-success">Payment Request Sent</button>);
        }

        let showSuccess= '';
        if(this.state.freqSuccess) {
            showSuccess = (<button type="button" className="btn btn-success">Payment Request Sent</button>);
        }

        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <strong>One Time Payment</strong> <small>Form</small>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Amount</label>
                                            <input type="text" className="form-control" id="amount" placeholder="Enter Amount"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" onClick={this.submitClickHandler} className="btn btn-sm btn-primary">Charge</button>{' '}
                                </div>
                                <div className="row">
                                    &nbsp;
                                </div>
                                <div className="row">
                                    <div className="col-sm-5">
                                        {showMessage}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <strong>Recurring Payment</strong> <small>Form</small>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Amount</label>
                                            <input type="text" className="form-control" id="freqAmount" placeholder="Enter Amount"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="ccmonth">Frequency</label>
                                        <select className="form-control" id="frequency">
                                            <option value="">Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button type="submit" onClick={this.submitHandler} className="btn btn-sm btn-primary">Charge</button>{' '}
                                </div>
                                <div className="row">
                                    &nbsp;
                                </div>
                                <div className="row">
                                    <div className="col-sm-5">
                                        {showSuccess}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default Orders;


