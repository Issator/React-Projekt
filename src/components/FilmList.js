import React from "react";
import FilmDetail from "./FilmDetail";

class FilmList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            films: []
        };
    }

    // Otwarcie strony
    componentDidMount(){
        fetch("https://pr-movies.herokuapp.com/api/movies")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                films: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        })
    }

    
    // Generowanie lisy filmów
    loadFilms(){

        // FILTER
        var films = this.state.films
        films = films.filter(item => (item.title && item.content))

        if(films.length){
            const lista = films.map((film) => {
                return <FilmDetail 
                    key={film.id}
                    id={film.id}
                    title={film.title} 
                    desc={film.content}
                    photo={film.image} 
                    showDetails={true}/>
            });
    
            return lista
        } else {
            return <div>Brak Filmów</div>
        }
        
    }

    render(){

        return (
            <div>

            {!this.state.isLoaded && 
                            <div className="ui container" >
                                ładowanie listy...
                            </div>}
            
            {this.state.isLoaded && 
                <div className="ui relaxed huge list" 
                    style={{
                        padding: 10,
                        }}>
                    {this.loadFilms()}
                </div>}
            </div>
        );
    }
}

export default FilmList;