import react from "react"
import FilmDetail from "../FilmDetail";
import Footer from "../Footer";
import NavBar from "../NavBar";

const film={"title": "Dom Gucci", 
"desc": "Historia Patrizii Reggiani, byłej żony Maurizio Gucciego, która planowała zabić swojego męża, wnuka znanego projektanta mody Guccio Gucci.",
"photo": "https://fwcdn.pl/fpo/66/41/866641/7983314.6.jpg"}

export default class DetailView extends react.Component {
    render(){
        return (
            <div>
                <NavBar/>
                <div className="ui relaxed huge list" style={{padding: 10, minHeight: "100vh"}}>
                    <FilmDetail 
                        key={film.title}
                        title={film.title} 
                        desc={film.desc}
                        photo={film.photo} />
                </div>
                <Footer/>
            </div>);
    }
}