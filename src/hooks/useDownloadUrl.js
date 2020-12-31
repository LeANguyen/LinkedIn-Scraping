import React, { useState } from "react";

const useDownloadUrl = () => {
  const [downloadUrl, setDownloadUrl] = useState("");

  const generate = data => {
    const file = new Blob([JSON.stringify(data, null, "\t")], {
      type: "text/plain"
    });
    setDownloadUrl(URL.createObjectURL(file));
  };

  return { downloadUrl, generate };
};

export default useDownloadUrl;
