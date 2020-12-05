import React, { useState } from "react";
import TableHeader from "./TableHeader";
import SingleSearchTableItem from "./SingleSearchTableItem";

const SingleSearchTable = ({ _data, _headers = ["Name", "URL", ""] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic for displaying items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = _data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let number = 1; number <= _data.length / itemsPerPage + 1; number++) {
    if (number == currentPage) {
      pageNumbers.push(
        <li className="page-item active">
          <a
            className="page-link"
            key={number}
            id={number}
            onClick={event => handleClick(event)}
          >
            {number}
          </a>
        </li>
      );
    } else {
      pageNumbers.push(
        <li className="page-item">
          <a
            className="page-link"
            key={number}
            id={number}
            onClick={event => handleClick(event)}
          >
            {number}
          </a>
        </li>
      );
    }
  }

  return (
    <div>
      <div className="table-responsive">
        {_data.length === 0 && (
          <p className="text-center m-5">There is no data to be displayed!</p>
        )}
        {_data.length !== 0 && (
          <>
            <table className="table">
              <thead>
                <TableHeader _headers={_headers}></TableHeader>
              </thead>

              <tbody>
                {currentItems.map((item, i) => {
                  return (
                    <SingleSearchTableItem
                      _item={item}
                      _key={i}
                    ></SingleSearchTableItem>
                  );
                })}
              </tbody>
            </table>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">
                    Previous
                  </a>
                </li>
                {pageNumbers.map((item, i) => {
                  return item;
                })}
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleSearchTable;
