import React, { useState, useEffect } from "react";
import SingleProfileModal from "./SingleProfileModal";

const SingleProfileModalList = ({ _id, _data }) => {
  const [downloadURLs, setDownloadUrls] = useState([]);

  useEffect(() => {
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
            _id={_id + i}
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

export default SingleProfileModalList;
