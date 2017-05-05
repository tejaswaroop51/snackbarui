import React, { Component } from 'react';

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:'',
            id:0,
        };
    }

    componentWillMount = () => {
        this.setState({name:this.props.name, id: this.props.id});
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({name:nextProps.name, id: nextProps.id});
    }
    handleRemoveUser = () => {
        let name = this.state.name;
        this.props.onUserRemove(name, this.state.id);
    }

    render() {
        return (
            <tr key={this.state.id}>
                <td>{this.state.name}</td>
                <td>
                    <i className="fa fa-close showHandCursor closeBtn" aria-hidden="true" onClick={this.handleRemoveUser} />
                </td> </tr>
        )
    }
}

export default UserDetails;