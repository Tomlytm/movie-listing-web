import React from 'react';
import ReactPaginate from 'react-paginate';
function TablePaginationComponent(props) {
  return (
    <div className="pagination-container">
      <ReactPaginate
        breakLabel="..."
        onPageChange={props.onPageChange}
        pageRangeDisplayed={5}
        pageCount={props.pageCount}
        previousLabel={
          <span className="pagination-arrow shadow">
            <svg
              width="10"
              height="10"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8334 7.00002H1.16675M1.16675 7.00002L7.00008 12.8334M1.16675 7.00002L7.00008 1.16669"
                stroke="#344054"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        }
        nextLabel={
          <span className="pagination-arrow">
            <svg
              width="10"
              height="10"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.1665 7.00002H12.8332M12.8332 7.00002L6.99984 1.16669M12.8332 7.00002L6.99984 12.8334"
                stroke="#344054"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        }
        nextClassName="pagination-arrow"
        previousClassName="pagination-arrow"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default TablePaginationComponent;
