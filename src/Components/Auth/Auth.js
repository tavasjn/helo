import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';




class Auth extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    handleLogin = () => {
        axios.post('/auth/login', { username: this.state.username, password: this.state.password }).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
            this.setState({
                username: '',
                password: ''
            })
        })
            .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        axios.post('/auth/register', { username: this.state.username, password: this.state.password }).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
            this.setState({
                username: '',
                password: ''
            })
        })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div>
                <div>
                    Logo Here
                </div>
                <div>
                    Helo
                </div>
                <input
                    value={this.state.username}
                    name='username'
                    onChange={(e) => this.handleInput(e)} />
                <input
                    value={this.state.password}
                    type='password'
                    name='password'
                    onChange={(e) => this.handleInput(e)} />
                <div>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState;
    return {
        user
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);