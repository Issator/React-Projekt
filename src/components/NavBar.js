import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class NavBar extends React.Component{


    render(){

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
                        <SearchBar/>
                    </div>
                    <div className="item">
                        <Link to="/signin">
                            <div className="ui red button">Zaloguj sie</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar