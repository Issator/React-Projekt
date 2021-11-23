import React from "react";
import FilmDetail from "./FilmDetail";

const FilmList = (props) => {

    const lista = props.filmy.map((film) => {
        return <FilmDetail 
            key={film.title}
            title={film.title} 
            desc={film.desc} />
    });

    return (
        <div className="ui celled list">
            {lista}
        </div>
    );
}

export default FilmList;