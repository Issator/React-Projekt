import react from "react";
import { Link } from "react-router-dom";

export default class LogView extends react.Component{

    state = {
        account: {
            login: "",
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
                        <div className="content">Logowanie</div>
                    </h1>

                    <div className="ui stacked segment">
                        <div className="ui form">
                            <form>

                                <div className="field">
                                    <label>login</label>
                                    <input type="text" placeholder="login"/>
                                </div>

                                <div className="field">
                                    <label>hasło</label>
                                    <input type="password" placeholder="password"/>
                                </div>

                                <button type="submit" className="fluid ui red button">Zaloguj</button>

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
                        Nie masz konta? <Link to="/signup">Zarejestruj się!</Link>
                    </div>

                </div>
                
            </div>
        );
    }
}