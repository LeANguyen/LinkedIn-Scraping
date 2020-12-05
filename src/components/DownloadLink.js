import React from "react";
import logo from "../assets/logo.png";

const DownloadLink = ({ _href = { logo } }) => {
  return (
    <div>
      <p className="text-center text-muted font-weight-bold">
        Your download is ready
      </p>
      <a href={_href} download>
        <p className="text-center font-weight-bold">Click here to download</p>
      </a>
    </div>
  );
};

export default DownloadLink;
