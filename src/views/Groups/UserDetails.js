import React, { Component } from 'react';

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:'',
        };
    }

    componentWillMount = () => {
        this.setState({name:this.props.name});
    }
    handleRemoveUser = () => {
        let name = this.state.name;
        this.props.onUserRemove(name);
    }

    render() {
        return (
            <tr key={this.props.key}>
                <td><li>{this.props.name}</li></td>
                <td>
                    <i className="fa fa-close showHandCursor closeBtn" aria-hidden="true" onClick={this.handleRemoveUser} />
                </td> </tr>
        )
    }
}

export default UserDetails;