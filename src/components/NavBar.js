import React from "react";
import { decodeToken, isExpired } from "react-jwt";
import { Link } from "react-router-dom";

class NavBar extends React.Component{

    render(){

        const user = decodeToken(localStorage.getItem('token'))
        const isNotLoggedIn = isExpired(localStorage.getItem('token'))

        return(
            <div className="ui top borderless menu">
                <div className="item">
                    <img className="ui tiny image" src="my_logo.svg" alt="Logo Strony"/>
                </div>
                <div className="item">
                    <h1 className="ui header">
                        Baza Danych o filmach
                    </h1>
                </div>
                <div className="right menu">
                    <div className="item">
                        {user && <h4>User: {user.name}</h4>}
                    </div>
                {isNotLoggedIn &&
                    <div className="item">
                        <Link to="/signin">
                            <div className="ui red button">Zaloguj sie</div>
                        </Link>
                    </div>}

                {!isNotLoggedIn &&
                    <div className="item">
                        <Link to="/add">
                            <div className="ui red button">Dodaj Film</div>
                        </Link>
                    </div>}

                {!isNotLoggedIn &&
                    <div className="item">
                        <Link to="/signin">
                            <div className="ui red button" 
                                 onClick={() => localStorage.removeItem('token') }>Wyloguj Się</div>
                        </Link>
                    </div>}
                </div>
            </div>
        );
    }
}

export default NavBar