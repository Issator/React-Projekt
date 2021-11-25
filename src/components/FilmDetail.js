import React from "react";

const FilmDetail = film => {
    return(
        <div className="item"
             style={{
                 display: "flex"
                 }}>
            <img className="ui image" 
                 src={film.photo} 
                 alt="Banner filmu"/>
            <div className="content">
                <div className="header">
                    {film.title}
                </div>
                <div className="description">
                    {film.desc}
                </div>
            </div>
        </div>
    );
}

export default FilmDetail