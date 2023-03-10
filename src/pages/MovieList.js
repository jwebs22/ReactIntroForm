import React from "react";

const TableHeader = () => {
     return (
         <thead>
               <tr>
                 <th>Title</th>
                 <th>Actors</th>
                 <th>Plot</th>
                 <th>Genre</th>
                 <th>IMDB Rating</th>
                 <th>Director</th>
                 <th>Year</th>
                 <th>Date Added</th>
               </tr>
             </thead>
     );
}
 

const TableBody = (props) => {
 
     const rows = props.data.map((row, index) => {
       return (
         <tr key={index}>
           <td>{row.title}</td>
           <td>{row.actors.join(" ")}</td>
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
     
     return <tbody>{rows}</tbody>
}
 
const MovieList = (props) => {

    const { 
      movies,
      removeMovie
    } = props;

    return ( 
      <table>
        <TableHeader/>
        <TableBody 
          data={movies} 
          removeMovie={removeMovie}
        />
      </table>
    )
}

export default MovieList;