import axios from "axios";
import react from "react";
import { Link } from "react-router-dom";

export default class SignView extends react.Component {

    state = {
        account: {
            login: "",
            name: "",
            email: "",
            password: ""
        },
        errors: {}
    }


    validate = () => {
        const errors = {};

        const {account} = this.state;
        // -- TYMCZASOWY BRAK
        //if (account.login.trim() === '') {
        //    errors.login = 'Login is required!';
        //}
        if (account.name.trim() === '') {
            errors.name = 'Nazwa jest wymagana!';
        }
        if (account.email.trim() === '') {
            errors.email = 'Email jest wymagany';
        }
        if (account.password.trim() === '') {
            errors.password = 'Hasło jest wymagane!';
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
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: this.state.account.name,
                email: this.state.account.email,
                password: this.state.account.password
            }
        }).then(() => {
            const errors = {};
            errors.success = "Konto pomyślnie utworzone!"
            this.setState({errors: errors || {}})
        }).catch((error) => {
            const errors = {};
            errors.logError = "Nazwa konta, email lub hasło niepoprawne!"
            this.setState({errors: errors || {}})
            console.log(error);
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
                    <div className="content">Rejestracja</div>
                </h1>

                <div className="ui stacked segment">
                    <div className="ui form">
                        <form onSubmit={this.handleSubmit}>
                        {/*
                            <div className="field"> 
                                <label>login</label>
                                <input 
                                    value={this.state.account.login}
                                    name="login"
                                    onChange={this.handleChange}
                                    type="text" 
                                    id="login"
                                    placeholder="Podaj login"/>
                                {this.state.errors.login &&
                                <div className="ui red message">
                                    <div className="header">
                                        {this.state.errors.login}
                                    </div>
                                </div>}
                            </div>
                         */}
                            <div className="field">
                                <label>nazwa</label>
                                <input 
                                    value={this.state.account.name}
                                    name="name"
                                    onChange={this.handleChange}
                                    type="text" 
                                    id="name"
                                    placeholder="Podaj nazwę użytkownika"/>
                                {this.state.errors.name &&
                                <div className="ui red message">
                                    <div className="header">
                                        {this.state.errors.name}
                                    </div>
                                </div>}
                            </div>

                            <div className="field">
                                <label>email</label>
                                <input 
                                    value={this.state.account.email}
                                    name="email"
                                    onChange={this.handleChange}
                                    type="text" 
                                    id="email"
                                    placeholder="Podaj adres Email"/>
                                {this.state.errors.email &&
                                <div className="ui red message">
                                    <div className="header">
                                        {this.state.errors.email}
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
                                    placeholder="Podaj hasło"/>
                                {this.state.errors.password &&
                                <div className="ui red message">
                                    <div className="header">
                                        {this.state.errors.password}
                                    </div>
                                </div>}
                            </div>

                            <button type="submit" className="fluid ui red button">Zarejestruj się</button>

                        </form>
                    </div>

                    {this.state.errors.logError &&
                        <div className="ui red message">
                            <div className="header">
                                {this.state.errors.logError}
                            </div>
                    </div>}

                    {this.state.errors.success &&
                        <div className="ui green message">
                            <div className="header">
                                {this.state.errors.success}
                            </div>
                    </div>}
                </div>

                <div className="ui message" style={{textAlign: 'center'}}>
                    Posiadasz konto? <Link to="/signin">Zaloguj się!</Link>
                </div>

            </div>
        
        </div>
        );
    }
}


