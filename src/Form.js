import React, { Component } from 'react';

class Form extends Component {

    // constructors are initialized when Form is created (instantiated)
    // we set the initial state of our form and save it to state.
    constructor(props){
        super(props); //inheriting props from Component

        // set the initial state of the Form
        this.initialState = {
            title: '',
            actors: '',
            plot: '',
            genre: '',
            imdbRating: '',
            director: '',
            year: '',
            dateAdded: new Date().toString(),
        };

        //set our initial state to state.
        this.state = this.initialState;
    }

    handleChange = event => {
        //get name, value out of target (element that changed)
        const { name, value } = event.target;

        //update our state 
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        //standard code for onSubmits 
        event.preventDefault();

        //add date
        const newDate = new Date().toString()
        this.setState({ dateAdded: newDate })
        
        //set the current state of our form to the handle submit
        this.props.addMovie(this.state);

        //clear inputs by setting form to inital state
        this.setState(this.initialState);
        this.initalState.dateAdded = newDate;
    }

    render() {
        //hook in data from state 
        const { title, actors, plot, genre, imdbRating, director, year } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title :</label><br/>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="actors">Actors :</label><br/>
                <input 
                    type="text" 
                    id="actors" 
                    name="actors"
                    value={actors}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="plot">Plot :</label><br/>
                <input 
                    type="text" 
                    id="plot" 
                    name="plot"
                    value={plot}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="genre">Genre :</label><br/>
                <input 
                    type="text" 
                    id="genre" 
                    name="genre"
                    value={genre}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="imdbRating">imdb Rating :</label><br/>
                <input 
                    type="text" 
                    id="imdbRating" 
                    name="imdbRating"
                    value={imdbRating}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="director">Director :</label><br/>
                <input 
                    type="text" 
                    id="director" 
                    name="director"
                    value={director}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="year">Year :</label><br/>
                <input 
                    type="text" 
                    id="year" 
                    name="year"
                    value={year}
                    onChange={this.handleChange}
                    />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form