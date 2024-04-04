import './styles/Search.css';
import {useRef, useState} from "react";

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const search = (): void => {
        const movieTitle: string = inputRef.current?.value || '';

        if (movieTitle.length >= 3) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }

    return (
        <form className="search-form">
            <input onChange={search} ref={inputRef} type="text" placeholder="Search for a movie title..."/>
            <button disabled={isButtonDisabled}>Search</button>
        </form>
    );
};

export default Search;