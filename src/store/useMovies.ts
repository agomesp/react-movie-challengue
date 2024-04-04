import create from "zustand";
import {Movie} from "../types/Movie.ts";

type MovieStore = {
    movies: Movie[];
    results: number;
    setMovies: (movies: Movie[]) => void;
    setResults: (results: number) => void;
}

export const useMovieStore = create<MovieStore>((set) => {
    return {
        movies: [],
        results: 0,
        search: '',
        setMovies: (movies: Movie[]) => set({movies}),
        setResults: (results: number) => set({results})
    }
});