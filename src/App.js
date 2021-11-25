import React from "react";
import NavBar from "./components/NavBar";
import FilmList from "./components/FilmList";
import Footer from "./components/Footer";

class App extends React.Component {
    state = {filmy: [
        {"title": "Dom Gucci", 
         "desc": "Historia Patrizii Reggiani, byłej żony Maurizio Gucciego, która planowała zabić swojego męża, wnuka znanego projektanta mody Guccio Gucci.",
         "photo": "https://fwcdn.pl/fpo/66/41/866641/7983314.6.jpg"},
        {"title": "Nie patrz w góre", 
         "desc": "Dwójka astronomów wyrusza w tournée po mediach, aby ostrzec ludzkość przed zmierzającą w stronę Ziemi zabójczą kometą.",
         "photo": "https://fwcdn.pl/fpo/88/23/848823/7983647.6.jpg"},
        {"title": "Kurier Francuski",
         "desc": "The French Dispatch prezentuje zbiór opowiadań z ostatniego numeru amerykańskiego magazynu opublikowanego w fikcyjnym francuskim mieście XX wieku.",
         "photo": "https://fwcdn.pl/fpo/74/18/817418/7978742.6.jpg"},
        {"title": "Matrix Zmartwychwstania",
         "desc": "Czwarta część serii filmowej Matrix w reżyserii Lany Wachowski",
         "photo": "https://fwcdn.pl/fpo/85/24/838524/7983979.6.jpg"},
        {"title": "Jurassic World: Dominion",
         "desc": "Amerykański film przygodowy science fiction wyreżyserowany przez Colina Trevorrowa",
         "photo": "https://fwcdn.pl/fpo/40/59/804059/7934120.6.jpg"},
        {"title": "Spiderman: Bez drogi do domu",
         "desc": "Kiedy cały świat dowiaduje się, że pod maską Spider Mana skrywa się Peter Parker, superbohater decyduje się zwrócić o pomoc do Doktora Strange'a.",
         "photo": "https://fwcdn.pl/fpo/02/61/850261/7984569.6.jpg"},
        {"title": "Tick, Tick... Boom!",
         "desc": "Dobiegający trzydziestki, obiecujący kompozytor teatralny próbuje pogodzić miłość i przyjaźń z presją stworzenia czegoś wielkiego, zanim skończy mu się czas.",
         "photo": "https://fwcdn.pl/fpo/74/13/847413/7978728.6.jpg"},
        {"title": "Ostatni pojedynek",
         "desc": "Opowieść o zdradzie i zemście rozgrywająca się w scenerii czternastowiecznej Francji, gdzie brutalność i przemoc wobec kobiet są na porządku dziennym.",
         "photo": "https://fwcdn.pl/fpo/21/33/842133/7978744.6.jpg"},
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