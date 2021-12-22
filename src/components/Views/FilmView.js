import react from "react";
import FilmList from "../FilmList"
import Footer from "../Footer";
import NavBar from "../NavBar";

export default class FilmView extends react.Component {

    render(){
        return (
            <div>
                <NavBar/>
                <FilmList filmy={this.props.filmy}/>
                <Footer/>
            </div>
        
        );
    }
}