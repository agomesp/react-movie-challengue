type PaginationProps = {
    currentPage: number;
    totalPages: number;
}
const Pagination = ({currentPage = 1, totalPages = 1}: PaginationProps) => {
    return (
        <div>
            <button>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button>Next</button>
        </div>
    );
};

export default Pagination;