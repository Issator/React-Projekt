import React from "react";
import { Link} from "react-router-dom";


const FilmDetail = film => {
    return(
        <div className="item"
             style={{
                 display: "flex"
                 }}>
            <img className="ui image" 
                    style={{width: "200px", height: "285 px"}}
                 src={film.photo} 
                 alt="Banner filmu"/>
            <div className="content">
                <div className="header">
                    {film.title}
                </div>
                <div className="description">
                    {film.desc}
                </div>
                {film.showDetails ? (
                    <Link to='/detail'>
                         <button className="ui red button"
                                 onClick={() => localStorage.setItem('filmId', film.id)}>Więcej</button> 
                    </Link>
                ) : null}
            </div>
        </div>
    );
}

export default FilmDetail