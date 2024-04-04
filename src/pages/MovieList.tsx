import Search from "../components/Search.tsx";
import Movies from "../components/Movies.tsx";

const MovieList = () => {
    return (
        <div>
            <h2>Movie Finder</h2>
            <Search/>
            <Movies/>
        </div>
    );
};

export default MovieList;