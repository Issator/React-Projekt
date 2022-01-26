import react from "react"
import FilmDetail from "../FilmDetail";
import Footer from "../Footer";
import NavBar from "../NavBar";

export default class DetailView extends react.Component {
    
    state = {
        id: localStorage.getItem("filmId"),
        isLoaded: false,
        error: null,
        film: null
    }

    componentDidMount(){
        fetch("https://pr-movies.herokuapp.com/api/movies/" + this.state.id)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                film: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        })
    }


    render(){
        const film = this.state.film
        if(this.state.isLoaded){
            return (
                <div>
                    <NavBar/>
                    <div className="ui relaxed huge list" style={{padding: 10, minHeight: "100vh"}}>
                        <FilmDetail 
                            key={film.title}
                            title={film.title} 
                            desc={film.content}
                            photo={film.image} />
                    </div>
                    <Footer/>
                </div>);
        }else{
            return(
            <div>
                <NavBar/>
                ładowanie...
            </div>
            )
        }
    }
}