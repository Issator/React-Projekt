import React from "react";

const FilmDetail = film => {
    return(
        <div className="item">
            <img className="ui avatar image" src="logo512.png" alt="Banner filmu"/>
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