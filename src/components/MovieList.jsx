import React, { useState } from 'react';


// Task 1: Initializing and Displaying a List

// Start by creating a MoviesList functional component.
// Initialize a state with a hardcoded list of movie titles using the useState hook.
// Expected Outcome:

// The component should render an unordered list (<ul>) of movie titles.
const MovieList = () => {
    // Task 1: Initializing and Displaying a List
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception',  briefDescription: 'an mind blowing thriller',showBriefDescription: false },
        { id: 2, title: 'Harry Potter', briefDescription: 'a intense adventure', showBriefDescription: false  },
        { id: 3, title: 'The Simpons', briefDescription: 'a funny comedy', showBriefDescription: false  }
    ]);
    //Task 2: Conditional Rendering of Movie Details
    const toggleMovieDescription = (id) => {
        setMovies(movies.map(movie =>
            movie.id === id ? { ...movie, showBriefDescription: !movie.showBriefDescription } : movie
        ));
    };
    //Task 3: Implementing Movie Removal
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };
    return (
        <div>
            <h1>Favorite Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <div onClick={() => toggleMovieDescription(movie.id)}>
                            <h2>{movie.title}</h2>
                            {movie.showBriefDescription && <p>{movie.briefDescription}</p>}
                        </div>
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};




export default MovieList



