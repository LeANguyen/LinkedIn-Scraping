import React from "react";
import DataTable from "./table/DataTable";
import ProfileTableItem from "./table/ProfileTableItem";

const MultipleProfileModal = ({
  _id,
  _title,
  _downloadContent,
  _downloadUrl,
  _downloadName
}) => {
  return (
    <>
      <div
        id={_id}
        className="modal fade"
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

            <div className="p-2">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    View All
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Select
                  </a>
                </div>
              </nav>
            </div>

            <div class="modal-body modal-multiple">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <pre> {JSON.stringify(_downloadContent, null, "\t")}</pre>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <DataTable
                    _id="profileTable"
                    _component={ProfileTableItem}
                    _data={_downloadContent}
                    _headers={["Profile", "Actions"]}
                  ></DataTable>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <a
                className="btn btn-success"
                href={_downloadUrl}
                download={_downloadName}
              >
                Download
              </a>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleProfileModal;
