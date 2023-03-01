import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Director"
        };
    }


    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted:", this.state.selectedOption);
    };

    render() {

        return (
            
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-12">

                        <form onSubmit={this.handleFormSubmit}>

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="Director"
                                        checked={this.state.selectedOption === "Director"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Director
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="Genre"
                                        checked={this.state.selectedOption === "Genre"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Genre
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="Title"
                                        checked={this.state.selectedOption === "Title"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    Title
                                </label>
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="Search Here"></input>
                                <button className="btn btn-primary mt-2" type="submit">
                                    Search
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        );
    }

}

export default Search