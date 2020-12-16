import React from "react";

const FormButton = ({ _text, _onClick, _variant = "info", _disabled }) => {
  return (
    <div>
      <button
        className={"btn btn-" + _variant + " rounded-pill py-2 my-4 btn-block"}
        onClick={_onClick}
        disabled={_disabled}
      >
        {_text}
      </button>
    </div>
  );
};

export default FormButton;
