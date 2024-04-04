import './styles/Search.css';

type SearchProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    isButtonDisabled: boolean;
}

const Search = ({handleChange, inputRef, isButtonDisabled}: SearchProps) => {
    return (
        <form className="search-form">
            <input onChange={handleChange} ref={inputRef} type="text" placeholder="Search for a movie title..."/>
            <button disabled={isButtonDisabled}>Search</button>
        </form>
    );
};

export default Search;