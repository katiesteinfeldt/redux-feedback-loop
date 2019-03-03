import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            console.log(response.data);
            this.props.dispatch({ type: 'SET_ADMIN', payload: response.data });
        });
    }

    handleDelete = id => {
        return () => {
            console.log('delete button was clicked', id);
            axios({
                method: 'DELETE',
                url: '/feedback/' + id,
            }).then((response) => {
                console.log(response);
                this.getFeedback();
            });
        }
    }

    createAdminList() {
        return this.props.adminReducer.map(feedback =>
            <tr key={feedback.id}><td>{feedback.id}</td>
            <td>{feedback.feeling}</td>
            <td>{feedback.understanding}</td>
            <td>{feedback.support}</td>
            <td>{feedback.comments}</td>
            <td><button onClick={this.handleDelete(feedback.id)}>Delete</button></td>
            </tr>
            )
    }

    render() {
        return (
            <div>
                <h1>Admin Portal</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.createAdminList()}
                    </tbody>
                </table>                   
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Admin);
