import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';


class Comments extends Component {
    state = {
        comments: '',
    }

    handleButtonClick = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments })
        this.setState({
            comments: '',
        })
        this.props.history.push('review');
    }

    handleChangeFor = event => {
        this.setState({
            comments: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>Any other comments?</h1>
                <br />
                <label htmlFor="comments">Comments?</label>
                <br />
                <input value={this.state.comments} onChange={this.handleChangeFor} id="comments" type="text"></input>
                <br />
                <div className="nextButton">
                    <button onClick={this.handleButtonClick}>Next</button>
                </div>
                <br />
                <h3>Feelings: {this.props.feelingsReducer} </h3>
                <h3>Understanding: {this.props.understandingReducer}</h3>
                <h3>Support: {this.props.supportReducer} </h3>
                <h3>Comments: {this.props.commentsReducer} </h3>
                <button type="button" disabled>Incomplete</button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);
