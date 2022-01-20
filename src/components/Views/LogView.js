import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default class LogView extends React.Component{

    state = {
        account: {
            login: "",
            password: ""
        },
        errors: {}
    }

    handleChangeRoute = () => {
        this.props.history.push('/');
        window.location.reload();
    };

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if (account.login.trim() === '') {
            errors.login = 'Login is required!';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleChange = (event) => {
        const account = {...this.state.account};
        account[event.currentTarget.name] = event.currentTarget.value;
        this.setState({account});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: this.state.account.name,
                password: this.state.account.password
            }
        }).then((respone) => {
            localStorage.setItem('token', respone.data.token);
            this.handleChangeRoute();
        }).catch((error) => {
            const errors = {}
            errors.logError = "Nazwa konta lub hasło niepoprawne!";
            this.setState({errors: errors || {}})
            console.log(error)
        })
    }

    render(){
        return (
            <div className="ui centered aligned page grid" 
                    style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}>

                <div className="column" style={{maxWidth: 450}}>

                    <h1 className="ui red header" style={{textAlign: 'center'}}>
                        <div className="content">Logowanie</div>
                    </h1>

                    <div className="ui stacked segment">
                        <div className="ui form">
                            <form onSubmit={this.handleSubmit}>

                                <div className="field">
                                    <label>login</label>
                                    <input 
                                        value={this.state.account.login}
                                        name="login"
                                        onChange={this.handleChange}
                                        type="text" 
                                        id="login"
                                        placeholder="Login"/>
                                    {this.state.errors.login &&
                                    <div className="ui red message">
                                        <div className="header">
                                            {this.state.errors.login}
                                        </div>
                                    </div>}
                                </div>

                                <div className="field">
                                    <label>hasło</label>
                                    <input 
                                        value={this.state.account.password}
                                        name="password"
                                        onChange={this.handleChange}
                                        type="password"
                                        id="password" 
                                        placeholder="Hasło"/>
                                        {this.state.errors.password &&
                                        <div className="ui red message">
                                            <div className="header">
                                                {this.state.errors.password}
                                            </div>
                                        </div>}
                                </div>

                                <button type="submit" className="fluid ui red button">Zaloguj</button>
                            </form>
                        </div>

                        {this.state.errors.logError &&
                            <div className="ui red message">
                                <div className="header">
                                    {this.state.errors.logError}
                                </div>
                        </div>}
                    </div>

                    

                    <div className="ui message" style={{textAlign: 'center'}}>
                        Nie masz konta? <Link to="/signup">Zarejestruj się!</Link>
                    </div>

                </div>
                
            </div>
        );
    }
}