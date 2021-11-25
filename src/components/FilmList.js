import React from "react";
import FilmDetail from "./FilmDetail";

const FilmList = (props) => {

    const lista = props.filmy.map((film) => {
        return <FilmDetail 
            key={film.title}
            title={film.title} 
            desc={film.desc}
            photo={film.photo} />
    });

    return (
        <div className="ui relaxed huge list" 
             style={{
                  padding: 10,
                 }}>
            {lista}
        </div>
    );
}

export default FilmList;