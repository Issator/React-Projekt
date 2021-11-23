import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = (event) => {
      this.setState({ term: event.target.value });
    };
  
    onFormSubmit = (event) => {
      event.preventDefault();
  
      console.log(this.state.term);
    };

    render() {
        return (
            <div>
                <form   onSubmit={this.onFormSubmit} 
                        className="ui form">
                    <div className="field">
                        <input  type="text"
                                placeholder="Szukaj filmu"
                                onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar