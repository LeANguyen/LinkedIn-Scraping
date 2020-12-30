import React, { useState, useEffect } from "react";
import SingleProfileModal from "./SingleProfileModal";
import $ from "jquery";

const ModalList = ({ _data }) => {
  const [downloadURLs, setDownloadUrls] = useState([]);

  useEffect(() => {
    // for (let i = 0; i < _data.length; i++) {
    //   $("#singleModal" + i).on("hidden.bs.modal", function(e) {
    //     $("#multipleModal").modal("show");
    //   });
    //   $("#singleModal" + i).on("show.bs.modal", function(e) {
    //     $("#multipleModal").modal("hide");
    //   });
    // }

    const newDownloadURLs = [];
    _data.map(item => {
      const file = new Blob([JSON.stringify(item, null, "\t")], {
        type: "text/plain"
      });
      newDownloadURLs.push(URL.createObjectURL(file));
      setDownloadUrls(newDownloadURLs);
    });
  }, []);

  return (
    <>
      {_data.map((item, i) => {
        return (
          <SingleProfileModal
            _id={"singleModal" + i}
            _downloadUrl={downloadURLs[i]}
            _downloadName={item.name}
            _downloadContent={<pre>{JSON.stringify(item, null, "\t")}</pre>}
            _title={item.name}
          ></SingleProfileModal>
        );
      })}
    </>
  );
};

export default ModalList;
