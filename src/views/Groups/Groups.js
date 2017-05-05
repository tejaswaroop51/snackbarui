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
        axios.post('http://localhost:4000/snackbar/getusers').then(function(response){
            let teamMembers = [];
            response.data.users.forEach((user) => {
                teamMembers.push({userID: user.UserID, name: user.Name});
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

    handleRemoveUser = (name,id) => {
        let self = this;
        axios.post('http://localhost:4000/snackbar/deleteuser',{userId: id}).then(function(response){
            window.location.reload();
        }).catch(function(error){
            //Some error occurred
        })


    }

    addUserHandler = (user) => {
        let self = this;
        axios.post('http://localhost:4000/snackbar/adduser',user).then(function(response){
            self.togglePrimary();
            window.location.reload();
        }).catch(function(error){
            //Some error occurred
        })

    }

    render() {
        console.log(this.state.teamMembers);
        const teamMembers = [];
        for (let i = 0; i < this.state.teamMembers.length; i++) {
                teamMembers.push(
                    <UserDetails
                        name={this.state.teamMembers[i].name}
                        onUserRemove={this.handleRemoveUser}
                        key={this.state.teamMembers[i].userID}
                        id={this.state.teamMembers[i].userID}
                    />
                );
        }

        return (
            <div>

                <div className="col-lg-8">
                    <Button color="primary" onClick={this.togglePrimary}>Add User</Button>
                    <Modal isOpen={this.state.addUser} toggle={this.togglePrimary} className={'modal-primary ' + this.props.className}>
                        <ModalHeader toggle={this.togglePrimary}>Add User</ModalHeader>
                        <ModalBody>
                            <AddUserForm onAddUser={this.addUserHandler} onCancel={this.togglePrimary}/>
                        </ModalBody>
                    </Modal>
                    <div className="row">
                        &nbsp;
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <i className="fa fa-align-justify"></i> Users
                        </div>
                        <div className="card-block">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>{teamMembers}</tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Groups;
