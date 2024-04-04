import Search from "../components/Search.tsx";
import Movies from "../components/Movies.tsx";
import {useMovieStore} from "../store/useMovies.ts";
import {useMovieSearch} from "../hooks/useMovieSearch.ts";
// import Pagination from "../components/Pagination.tsx";

const MovieList = () => {
    const [movies, results] = useMovieStore((state) => [state.movies, state.results]);
    const { inputRef, isButtonDisabled, loading, handleChange } = useMovieSearch();

    return (
        <div>
            <h2>Movie Finder</h2>
            <Search inputRef={inputRef} isButtonDisabled={isButtonDisabled} handleChange={handleChange} />
            {loading ? <p>Loading...</p> : <Movies movies={movies} results={results}/>}
            {/*<Pagination/>*/}
        </div>
    );
};

export default MovieList;