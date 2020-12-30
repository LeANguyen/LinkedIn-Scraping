import React, { useState, useEffect } from "react";
import FormButton from "../form/FormButton";
import $ from "jquery";
import "../Modal.css";

const ProfileTableItem = ({ _item, _key }) => {
  const [downloadUrl, setDownloadUrl] = useState();

  useEffect(() => {
    $("#multipleModal").on("hidden.bs.modal", function(e) {
      $("body").addClass("modal-open");
    });
    $("#singleModal" + _key).on("hidden.bs.modal", function(e) {
      $("#multipleModal").modal("show");
    });
    $("#singleModal" + _key).on("show.bs.modal", function(e) {
      $("#multipleModal").modal("hide");
      //   $("body").addClass("modal-open");
    });
    const file = new Blob([JSON.stringify(_item, null, "\t")], {
      type: "text/plain"
    });
    setDownloadUrl(URL.createObjectURL(file));
  }, []);

  return (
    <>
      <tr key={_key}>
        <td className="align-middle">
          <img src={_item.img} width="100" className="rounded"></img>
          <div className="ml-4 d-inline-block align-middle">
            <strong>
              <a>{_item.name}</a>
            </strong>
            <p className="text-muted">{_item.job_title}</p>
            <p className="text-muted">{_item.location}</p>
          </div>
        </td>

        <td className="align-middle">
          <FormButton
            _text="View"
            _variant="info"
            _onClick={() => {
              $("#singleModal" + _key).modal("show");
            }}
          ></FormButton>

          <a
            className="btn btn-danger rounded-pill btn-block font-weight-bold"
            href={downloadUrl}
            download={_item.name}
          >
            Download
          </a>
        </td>
      </tr>
    </>
  );
};

export default ProfileTableItem;
