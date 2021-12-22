import react from "react";
import { Link } from "react-router-dom";

export default class SignView extends react.Component {

    state = {
        account: {
            login: "",
            name: "",
            email: "",
            password: ""
        }
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
                        <form>

                            <div className="field">
                                <label>login</label>
                                <input type="text" placeholder="login"/>
                            </div>

                            <div className="field">
                                <label>nazwa</label>
                                <input type="text" placeholder="name"/>
                            </div>

                            <div className="field">
                                <label>email</label>
                                <input type="text" placeholder="email"/>
                            </div>

                            <div className="field">
                                <label>hasło</label>
                                <input type="text" placeholder="password"/>
                            </div>

                            <button type="submit" className="fluid ui red button">Zarejestruj się</button>

                            <div className="ui error message">
                                <div className="header">
                                    Title of the message
                                </div>
                                Text of the message
                            </div>

                        </form>
                    </div>
                </div>

                <div className="ui message" style={{textAlign: 'center'}}>
                    Posiadasz konto? <Link to="/signin">Zaloguj się!</Link>
                </div>

            </div>
        
        </div>
        );
    }
}


