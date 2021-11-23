import React from "react";
import NavBar from "./components/NavBar";
import FilmList from "./components/FilmList";
import Footer from "./components/Footer";

class App extends React.Component {
    state = {filmy: [
        {"title": "film-10", "desc": "fajny film"},
        {"title": "film-20", "desc": "też fajny film"},
        {"title": "film-30", "desc": "ten troche fajny"},
        {"title": "film-40", "desc": "ten nie oglądałem"},
        {"title": "film-50", "desc": "podobno fajny"},
        {"title": "film-60", "desc": "różnie mówią"},

        {"title": "film-11", "desc": "fajny film"},
        {"title": "film-21", "desc": "też fajny film"},
        {"title": "film-31", "desc": "ten troche fajny"},
        {"title": "film-41", "desc": "ten nie oglądałem"},
        {"title": "film-51", "desc": "podobno fajny"},
        {"title": "film-61", "desc": "różnie mówią"},

        {"title": "film-12", "desc": "fajny film"},
        {"title": "film-22", "desc": "też fajny film"},
        {"title": "film-32", "desc": "ten troche fajny"},
        {"title": "film-42", "desc": "ten nie oglądałem"},
        {"title": "film-52", "desc": "podobno fajny"},
        {"title": "film-62", "desc": "różnie mówią"},

        {"title": "film-13", "desc": "fajny film"},
        {"title": "film-23", "desc": "też fajny film"},
        {"title": "film-33", "desc": "ten troche fajny"},
        {"title": "film-43", "desc": "ten nie oglądałem"},
        {"title": "film-53", "desc": "podobno fajny"},
        {"title": "film-63", "desc": "różnie mówią"}
    ]};

    render(){
        return (
            <div>
                <NavBar/>
                <FilmList filmy={this.state.filmy}/>
                <Footer/>
            </div>
        );
    }

}

export default App