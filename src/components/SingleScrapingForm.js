import React from "react";
import logo from "../assets/logo.png";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import DownloadLink from "./DownloadLink";
import FormHeader from "./form/FormHeader";
import Form from "./form/Form";

const SingleScrapingForm = () => {
  return (
    <div className="row py-5 p-4 bg-white rounded shadow-lg">
      <div className="col-lg-6">
        <FormHeader _iconName="user" _text="Single Scraping"></FormHeader>
        <Form>
          <FormTextInput
            _iconName="search"
            _placeHolder="Profile's URL"
          ></FormTextInput>
          <FormButton
            _text="Scrape"
            _onClick={() => console.log("checkValidOnCheckOut()")}
          ></FormButton>
          <DownloadLink _href={logo}></DownloadLink>
        </Form>
      </div>

      <div className="col-lg-6">
        <FormHeader _iconName="users" _text="Multiple Scraping"></FormHeader>
        <form>
          <div className="form-group p-4">
            <FormTextInput
              _iconName="search"
              _placeHolder="Query Command"
            ></FormTextInput>
            <FormTextInput
              _iconName="users"
              _placeHolder="Quantity"
              _inputType="number"
            ></FormTextInput>
            <FormButton
              _text="Scrape"
              _onClick={() => console.log("checkValidOnCheckOut()")}
            ></FormButton>
            <DownloadLink _href={logo}></DownloadLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleScrapingForm;
