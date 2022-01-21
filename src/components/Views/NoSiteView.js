import React from "react";
import { Link } from "react-router-dom";

export default class NoSiteView extends React.Component{
    render(){
        return(
            <div className="ui centered aligned page grid" 
            style={{
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>

                <div className="column" style={{maxWidth: 450}}>
                    <div className="ui stacked segment">

                    <h2 class="ui red header">
                        <i class="exclamation triangle icon"></i>
                            <div class="content"> Brak Strony!
                            <div class="sub header">Podna strona nie istnieje</div>
                        </div>
                    </h2>
                        
                        <div className="ui container" style={{textAlign: 'center'}}>
                            <div>
                                <Link to="/">       <div className="ui red button">Wróć do menu</div>   </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}