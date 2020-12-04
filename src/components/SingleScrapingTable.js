import React, { useState } from "react";

const SingleScrapingTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic for displaying items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let number = 1; number <= data.length / itemsPerPage + 1; number++) {
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
    <div className="row">
      <div className="col-lg-12 p-5 bg-white rounded shadow-lg">
        <div className="bg-dark text-white rounded-pill px-4 py-3 font-weight-bold">
          Scrape Profile
        </div>
        <div className="p-4">
          <div className="row">
            <div className="col-12">
              <strong className="text-muted">Profile's Name:</strong>
            </div>
            <div className="col-12">
              <form>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-10">
                      <div class="input-group mt-2 mb-4">
                        <div class="input-group-append">
                          <span class="input-group-text rounded-left">
                            <i class="fa fa-search"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Profile's Name"
                          aria-label="from"
                          aria-describedby="from"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-2">
                      <button
                        className="btn btn-info rounded mt-2 btn-block"
                        id="checkout_btn"
                        style={{ color: "white" }}
                        onClick={() => console.log("checkValidOnCheckOut()")}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="table-responsive">
          {data.length === 0 && (
            <p className="text-center m-5">There is no data to be displayed!</p>
          )}
          {data.length !== 0 && (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="border-0 rounded-left bg-dark text-white"
                    >
                      <div className="p-2 px-3 text-uppercase">Name</div>
                    </th>
                    <th scope="col" className="border-0 bg-dark text-white">
                      <div className="py-2 text-uppercase">Profile's URL</div>
                    </th>
                    <th
                      scope="col"
                      className="border-0 rounded-right bg-dark text-white"
                    >
                      <div className="py-2 text-uppercase"></div>
                    </th>
                  </tr>
                </thead>
                <tbody id="cart_table_body">
                  {currentItems.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="align-middle">
                          <strong id="price_label${data[i].item_id}">
                            {item.name}
                          </strong>
                        </td>
                        <td className="align-middle">
                          <a
                            className="nav-link"
                            href={item.url}
                            target="_blank"
                          >
                            <strong id="price_label${data[i].item_id}">
                              {item.url}
                            </strong>
                          </a>
                        </td>
                        <td className="align-middle">
                          <button
                            className="btn btn-info"
                            id="remove_btn${data[i].item_id}"
                            onClick={() =>
                              console.log("remove(${data[i].item_id})")
                            }
                          >
                            Scrape
                          </button>
                        </td>
                      </tr>
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
    </div>
  );
};

export default SingleScrapingTable;
