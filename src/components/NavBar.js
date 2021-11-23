import React from "react";
import SearchBar from "./SearchBar";

class NavBar extends React.Component{


    render(){

        return(
            <div className="search-bar ui segment">
                <div className="ui middle aligned grid">
                    <div className="two wide column">
                        <div className="ui form">
                            <img className="ui tiny image" src="logo512.png" alt="Logo Strony"/>
                        </div>
                    </div>
                    
                    <div className="twelve wide column">
                        <SearchBar/>
                    </div>

                    <div className="two wide column">
                        <div className="ui primary button">Zaloguj sie</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar