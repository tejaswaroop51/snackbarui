/**
 * Created by tvankada on 5/5/17.
 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CartInfo from "./CartInfo";

import axios from 'axios';


class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: [],
        };
    }

    componentWillMount = () => {
        let self = this;
        axios.post('http://10.155.209.58:4000/snackbar/cartinfo').then(function(response){
            let cart = [];
            response.data.cartInfo.forEach((product) => {
                cart.push({productId: product.ProductId, name: product.Name , quantity: product.Quantity});
            });
            self.setState({cart});

        }).catch(function(error){
            //Some error occurred
        })
    }

    submitClickHandler = () => {
        let self = this;
        axios.post('http://localhost:4000/snackbar/submitOrder').then(function(response){
            console.log(response);

        }).catch(function(error){
            //Some error occurred
        })
    }

    quantityUpdate = (product) => {
        let self = this;
        axios.post('http://localhost:4000/snackbar/updateQuantity',product).then(function(response){
            console.log(response);

        }).catch(function(error){
            //Some error occurred
        })
    }

    
    render() {

        const cart = [];
        for (let i = 0; i < this.state.cart.length; i++) {
            cart.push(
                <CartInfo
                    quantity={this.state.cart[i].quantity}
                    productId={this.state.cart[i].productId}
                    name={this.state.cart[i].name}
                    updateQuantity={this.quantityUpdate}
                />
            );
        }

        return (
            <div>

                <div className="col-lg-8">

                    <br/>
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-align-justify"></i> Cart Information
                        </div>
                        <div className="card-block">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                </tr>
                                </thead>
                                <tbody>{cart}</tbody>
                            </table>
                            <div className="form-group row">
                                <label className="col-md-3 form-control-label" htmlFor="multiple-select">Order Frequency</label>
                                <div className="col-md-9">
                                    <select id="multiple-select" name="multiple-select" className="form-control">
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
                                <button type="submit" onClick={this.submitClickHandler} className="btn btn-sm btn-primary">Submit Order</button>{' '}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Orders;

