import "../App.css"
export default function pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      {nPages === 0 ? (
        <div></div>
      ) : (
        <div className="pagination">
          <div className="page">
            <a className="page-link" onClick={prevPage} href="#">
              <div className="prev">
              Previous
              </div>
            </a>
          </div>
          {pageNumbers.map((pgNumber) => (
            <div
              key={pgNumber}
              className={`page-item ${
                currentPage == pgNumber ? "active" : ""
              } `}
            >
              <a onClick={() => setCurrentPage(pgNumber)} className="page-link">
                {pgNumber}
              </a>
            </div>
          ))}
          <div className="page">
            <a className="page-link" onClick={nextPage} href="#">
              <div className="next">
              Next
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
