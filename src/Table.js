import React, { Component } from "react";


//Table Header
 const TableHeader = () => {
     return (
         <thead>
               <tr>
                 <th>Title</th>
                 <th>Actors</th>
                 <th>Plot</th>
                 <th>Genre</th>
                 <th>imdb Rating</th>
                 <th>Director</th>
                 <th>Year</th>
                 <th>Date Added</th>
               </tr>
             </thead>
     );
 }
 
//Table Body
 const TableBody = (props) => {
 
//Build Rows, map over each row and wrap it in an html table
//Add onClick listener to delete the movie. 

const rows = props.data.map((row, index) => {
return (
    <tr key={index}>
    <td>{row.title}</td>
    {/* Using .join on actors, get a 'not a function' error on submit */}
    <td>{row.actors}</td>
    <td>{row.plot}</td>
    <td>{row.genre}</td>
    <td>{row.imdbRating}</td>
    <td>{row.director}</td>
    <td>{row.year}</td>
    <td>{row.dateAdded}</td>
    <td><button onClick={() => props.removeMovie(index)}> Delete</button></td>
    </tr>
)
})
//Return rows wrapped in the table body
return <tbody>{rows}</tbody>
}


//Table component
 class Table extends Component {
    render() {
        //read props passed in from App.js
        const { 
            movieData, 
            removeMovie
        } = this.props;
 
        return ( 
           <table>
            <TableHeader/>
            <TableBody 
               data={movieData} 
               removeMovie={removeMovie}
            />
           </table>
        )
    }
}
 
 export default Table