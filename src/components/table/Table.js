import React, { useState } from "react";
import TableHeader from "./TableHeader";
import SearchProfileTableItem from "./SearchProfileTableItem";
import usePagination from "./usePagination";
import Pagination from "./Pagination";

const Table = ({ _data, _headers = [] }) => {
  const pagination = usePagination(_data);

  return (
    <div>
      <div className="table-responsive">
        {_data.length === 0 && (
          <p className="text-center my-4">There is no data to be displayed!</p>
        )}
        {_data.length !== 0 && (
          <>
            <table className="table">
              <thead>
                <TableHeader _headers={_headers}></TableHeader>
              </thead>

              <tbody>
                {pagination.currentItems.map((item, i) => {
                  return (
                    <SearchProfileTableItem
                      _item={item}
                      _key={i}
                    ></SearchProfileTableItem>
                  );
                })}
              </tbody>
            </table>

            <Pagination _pageNumbers={pagination.pageNumbers}></Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default Table;
