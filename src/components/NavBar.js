import React from "react";
import SearchBar from "./SearchBar";

class NavBar extends React.Component{


    render(){

        return(
            <div class="ui top borderless menu">
                <div class="item">
                    <img className="ui tiny image" src="my_logo.svg" alt="Logo Strony"/>
                </div>
                <div class="item">
                    <h1 class="ui header">
                        Baza Danych o filmach
                    </h1>
                </div>
                <div class="right menu">
                    <div class="item">
                        <SearchBar/>
                    </div>
                    <div class="item">
                        <div className="ui red button">Zaloguj sie</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar