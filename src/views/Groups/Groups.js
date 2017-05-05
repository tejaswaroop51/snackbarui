import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddUserForm from "./AddUserForm";
import UserDetails from "./UserDetails";
import axios from 'axios';


class Groups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addUser: false,
            teamMembers: [],
        };
    }

    componentWillMount = () => {
        let self = this;
        axios.post('http://10.155.209.58:3000/snackbar/getusers').then(function(response){
            let teamMembers = [];
            response.data.users.forEach((user) => {
                teamMembers.push(user.Name)
            });
            self.setState({teamMembers});
        }).catch(function(error){
            //Some error occurred
        })
    }

    togglePrimary = () => {
        this.setState({
            addUser: !this.state.addUser,
        });
    }

    handleRemoveUser = (name) => {
        let teamMembers = this.state.teamMembers;
        for (let i = 0; i < teamMembers.length; i++) {
            console.log(teamMembers[i]+"----"+name);
            if(teamMembers[i] === name){
                teamMembers.splice(i,1);
            }
        }
        this.setState({
            teamMembers,
        });
    }

    addUserHandler = (user) => {
        let teamMembers = this.state.teamMembers;
        teamMembers.push(user);
        this.setState({
            teamMembers,
        });
        this.togglePrimary();
    }

    render() {
        console.log(this.state.teamMembers);
        const teamMembers = [];
        for (let i = 0; i < this.state.teamMembers.length; i++) {
                teamMembers.push(
                    <UserDetails name={this.state.teamMembers[i]} onUserRemove={this.handleRemoveUser} key={this.state.teamMembers[i]}/>
                );
        }

        return (
            <div>
                <div><strong>Group</strong></div>
                <Button color="primary" onClick={this.togglePrimary}>Add User</Button>
                <Modal isOpen={this.state.addUser} toggle={this.togglePrimary} className={'modal-primary ' + this.props.className}>
                    <ModalHeader toggle={this.togglePrimary}>Add User</ModalHeader>
                    <ModalBody>
                        <AddUserForm onAddUser={this.addUserHandler} onCancel={this.togglePrimary}/>
                    </ModalBody>
                </Modal>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <colgroup>
                        <col width="20%" />
                        <col width="10%" />
                    </colgroup>
                    <tbody>{teamMembers}</tbody>
                </table>
            </div>
        )
    }
}

export default Groups;
