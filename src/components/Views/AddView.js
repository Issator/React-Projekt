import react from "react";

export default class AddView extends react.Component {

    state = {
        film: {
            title: "",
            desc: "",
            photo: ""
        },
        errors: {}
    }

    validate = () => {
        const errors = {};

        const {film} = this.state;
        if (film.title.trim() === '') {
            errors.title = 'Title is required!';
        }
        if (film.desc.trim() === '') {
            errors.desc = 'Descripton is required!';
        }
        if (film.photo.trim() === '') {
            errors.photo = 'Photo is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleChange = (event) => {
        const film = {...this.state.film};
        film[event.currentTarget.name] = event.currentTarget.value;
        this.setState({film});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
    }

    render(){
        return(
            <div className="ui centered aligned page grid" 
            style={{
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>

                <div className="column" style={{maxWidth: 450}}>

                    <h1 className="ui red header" style={{textAlign: 'center'}}>
                        <div className="content">Dodaj film</div>
                    </h1>

                    <div className="ui stacked segment">
                        <div className="ui form">
                            <form onSubmit={this.handleSubmit}>

                                <div className="field">
                                    <label>nazwa</label>
                                    <input 
                                        value={this.state.film.title}
                                        name="title"
                                        onChange={this.handleChange}
                                        type="text" 
                                        id="title"
                                        placeholder="Podaj tytuł"/>
                                    {this.state.errors.title &&
                                    <div className="ui red message">
                                        <div className="header">
                                            {this.state.errors.title}
                                        </div>
                                    </div>}
                                </div>

                                <div className="field">
                                    <label>opis</label>
                                    <textarea
                                        value={this.state.film.desc}
                                        name="desc"
                                        onChange={this.handleChange}
                                        type="text" 
                                        id="desc"
                                        placeholder="Podaj opis filmu"/>
                                    {this.state.errors.desc &&
                                    <div className="ui red message">
                                        <div className="header">
                                            {this.state.errors.desc}
                                        </div>
                                    </div>}
                                </div>

                                <div className="field">
                                    <label>Obraz</label>
                                    <input 
                                        value={this.state.film.photo}
                                        name="photo"
                                        onChange={this.handleChange}
                                        type="text" 
                                        id="photo"
                                        placeholder="Podaj Link do zdjęcia"/>
                                    {this.state.errors.photo &&
                                    <div className="ui red message">
                                        <div className="header">
                                            {this.state.errors.photo}
                                        </div>
                                    </div>}
                                </div>

                                <button type="submit" className="fluid ui red button">Dodaj film</button>

                                <div className="ui error message">
                                    <div className="header">
                                        Title of the message
                                    </div>
                                    Text of the message
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}