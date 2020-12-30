import React from "react";

const FormDownloadButton = ({ _text, _href, _downnload, _variant }) => {
  return (
    <a
      className={
        "btn btn-" + _variant + " py-2 font-weight-bold rounded-pill btn-block"
      }
      href={_href}
      download={_downnload}
    >
      {_text}
    </a>
  );
};

export default FormDownloadButton;
