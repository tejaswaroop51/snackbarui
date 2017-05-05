/**
 * Created by tvankada on 5/5/17.
 */
import React, { Component } from 'react';

class CartInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quantity:0,
            productId:'',
            name:''
        };
    }

    componentWillMount = () => {
        this.setState({quantity:this.props.quantity, productId: this.props.productId, name: this.props.name});
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({quantity:nextProps.quantity, productId: nextProps.productId, name: nextProps.name});
    }

    selectHandler = (event) => {
        let product = {};
        product.productId = String.prototype.trim.call(this.state.productId);
        product.quantity = parseInt(event.target.value);
        this.props.updateQuantity(product);
    }


    render() {
        let options = [];
        for(let i=1; i<=10 ; i++) {
            options.push(<option value={i} selected={i === this.state.quantity ? 'selected' : ''}>{i}</option>)
        }
        let selectDOMID = "select_"+this.state.productId;
        return (
            <tr key={this.state.productId}>
                <td>{this.state.name}</td>
                <td>
                    <select id={selectDOMID} name="multiple-select" className="form-control" onChange={this.selectHandler}>
                        {options}
                    </select>
                </td> </tr>
        )
    }
}

export default CartInfo;