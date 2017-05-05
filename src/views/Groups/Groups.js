import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddUserForm from "./AddUserForm";
import UserDetails from "./UserDetails";


class Groups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addUser: false,
            teamMembers: ['Divya','Teja', 'Baqar', 'Thien', 'Lila'],
        };
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
        const teamMembers = [];
        for (let i = 0; i < this.state.teamMembers.length; i++) {
                teamMembers.push(
                    <UserDetails name={this.state.teamMembers[i]} onUserRemove={this.handleRemoveUser}/>
                    ,
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
