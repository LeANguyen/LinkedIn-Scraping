import React from "react";
import FormButton from "../form/FormButton";

const SingleSearchTableItem = ({ _item, _key, _onClickScrape }) => {
  return (
    <tr key={_key}>
      <td className="align-middle">
        <strong>{_item.name}</strong>
      </td>
      <td className="align-middle">
        <a className="nav-link" href={_item.url} target="_blank">
          <strong>{_item.url}</strong>
        </a>
      </td>
      <td className="align-middle">
        <FormButton
          _text="View"
          _variant="info"
          _onClick={() => console.log("remove(${data[i].item_id})")}
        >
          Scrape
        </FormButton>
      </td>
    </tr>
  );
};

export default SingleSearchTableItem;
