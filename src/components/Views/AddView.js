import react from "react";

export default class AddView extends react.Component {

    state = {
        film: {
            title: "",
            desc: "",
            photo: ""
        }
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
                            <form>

                                <div className="field">
                                    <label>nazwa</label>
                                    <input type="text" placeholder="name"/>
                                </div>

                                <div className="field">
                                    <label>opis</label>
                                    <textarea type="text" placeholder="desc"/>
                                </div>

                                <div className="field">
                                    <label>Obraz</label>
                                    <input type="file" placeholder="file"/>
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