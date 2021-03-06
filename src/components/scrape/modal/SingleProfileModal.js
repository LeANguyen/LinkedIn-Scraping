import React from "react";

const SingleProfileModal = ({
  _id,
  _title,
  _downloadContent,
  _downloadUrl,
  _downloadName
}) => {
  return (
    <div
      id={_id}
      class="modal fade overflow-auto"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog mw-100 w-75">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{_title}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body modal-single">{_downloadContent}</div>

          <div class="modal-footer">
            <a
              className="btn btn-info font-weight-bold py-2"
              href={_downloadUrl}
              download={_downloadName}
            >
              Download
            </a>
            <button
              type="button"
              class="btn btn-secondary font-weight-bold py-2"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfileModal;
