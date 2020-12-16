import React from "react";
import logo from "../assets/logo.png";

const DownloadLink = ({ _href = { logo }, _downnload = "fuck" }) => {
  return (
    <div>
      <p className="text-center text-muted font-weight-bold">
        Your download is ready
      </p>
      <a
        className="btn btn-success rounded-pill btn-block"
        href={_href}
        download={_downnload}
      >
        Click here to download
      </a>
    </div>
  );
};

export default DownloadLink;
