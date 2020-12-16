import React from "react";

const TableHeader = ({ _headers }) => {
  return (
    <tr className="bg-dark text-white text-center">
      {_headers.map(header => {
        return <th scope="col">{header}</th>;
      })}
    </tr>
  );
};

export default TableHeader;
