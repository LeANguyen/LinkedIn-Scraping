import React from "react";

const SingleSearchTableItem = ({ _item, _key, _onClickScrape }) => {
  return (
    <tr key={_key}>
      <td className="align-middle">
        <strong id="price_label${data[i].item_id}">{_item.name}</strong>
      </td>
      <td className="align-middle">
        <a className="nav-link" href={_item.url} target="_blank">
          <strong id="price_label${data[i].item_id}">{_item.url}</strong>
        </a>
      </td>
      <td className="align-middle">
        <button
          className="btn btn-info"
          id="remove_btn${data[i].item_id}"
          onClick={() => console.log("remove(${data[i].item_id})")}
        >
          Scrape
        </button>
      </td>
    </tr>
  );
};

export default SingleSearchTableItem;
