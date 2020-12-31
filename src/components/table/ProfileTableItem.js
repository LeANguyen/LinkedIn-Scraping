import React, { useState, useEffect } from "react";
import FormButton from "../form/FormButton";
import $ from "jquery";
import "../Modal.css";
import FormDownloadButton from "../form/FormDownloadButton";

const ProfileTableItem = ({ _item, _key }) => {
  const [downloadUrl, setDownloadUrl] = useState();

  useEffect(() => {
    // $("#multipleProfileModal").on("hidden.bs.modal", function(e) {
    //   $("body").addClass("modal-open");
    // });
    $("#singleProfileModal" + _key).on("hidden.bs.modal", function(e) {
      $("#multipleProfileModal").modal("show");
    });
    $("#singleProfileModal" + _key).on("show.bs.modal", function(e) {
      $("#multipleProfileModal").modal("hide");
    });
    $("#singleProfileModal" + _key).on("shown.bs.modal", function(e) {
      $("body").addClass("modal-open");
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
            _variant="danger"
            _onClick={() => {
              $("#singleProfileModal" + _key).modal("show");
            }}
          ></FormButton>

          <FormDownloadButton
            _downnload={_item.name}
            _href={downloadUrl}
            _variant="info"
            _text="Download"
          ></FormDownloadButton>
        </td>
      </tr>
    </>
  );
};

export default ProfileTableItem;
