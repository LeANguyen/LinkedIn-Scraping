import React, { useState } from "react";

const useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const request = async (...args) => {
    setIsLoading(true);
    setError(false);
    setSuccess(false);
    const response = await apiFunc(...args);
    setIsLoading(false);

    if (!response.ok) {
      setError(true);
    } else {
      setData(response.data);
      setSuccess(true);
      const file = new Blob([JSON.stringify(response.data, null, "\t")], {
        type: "text/plain"
      });
      setDownloadUrl(URL.createObjectURL(file));
    }

    return response;
  };

  return { data, error, isLoading, request, success, downloadUrl };
};

export default useApi;
