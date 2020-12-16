import React from "react";

const FormTextInput = ({
  _placeHolder,
  _onChange,
  _inputType = "text",
  _iconName
}) => {
  return (
    <div className="form-group px-4 my-4">
      <strong className="text-muted">{_placeHolder + ":"}</strong>

      <div className="input-group">
        <div className="input-group-append">
          <span className="input-group-text rounded-left">
            <i className={"fa fa-" + _iconName}></i>
          </span>
        </div>
        {_inputType === "text" && (
          <input
            type="text"
            className="form-control"
            placeholder={_placeHolder}
            onChange={_onChange}
          ></input>
        )}
        {_inputType === "number" && (
          <input
            type="number"
            oninput="this.value = Math.abs(this.value)"
            className="form-control"
            step="1"
            max="9999"
            min="1"
            onfocusin="quantity_focus(this.value)"
            onChange={_onChange}
          ></input>
        )}
      </div>
    </div>
  );
};

export default FormTextInput;
