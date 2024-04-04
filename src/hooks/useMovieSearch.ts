import {useEffect, useRef, useState} from "react";
import {useMovieStore} from "../store/useMovies.ts";
import {useDebounce} from "./useDebounce.ts";
import useFetchMovies from "../queries/movies";

export function useMovieSearch() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const setMovies = useMovieStore((state) => state.setMovies);
    const setResults = useMovieStore((state) => state.setResults);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const debouncedSearch = useDebounce(search);
    const {data} = useFetchMovies(debouncedSearch);

    const handleChange = (): void => {
        const movieTitle: string = inputRef.current?.value || '';
        setLoading(true);

        if (movieTitle.length >= 3) {
            setSearch(movieTitle);
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
            setLoading(false);
            setResults(0);
        }
    }

    useEffect(() => {
        if (data?.Search) {
            setMovies(data.Search)
            setLoading(false);
            setResults(parseInt(data.totalResults));
        }

        if (data?.Response === "False") {
            setLoading(false);
            setResults(-1);
        }
    }, [data]);

    return {
        inputRef,
        isButtonDisabled,
        loading,
        handleChange
    };
}