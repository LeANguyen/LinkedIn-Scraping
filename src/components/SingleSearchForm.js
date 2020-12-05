import React from "react";
import SingleScrapingTable from "./table/SingleSearchTable";
import FormHeader from "../components/form/FormHeader";
import Form from "../components/form/Form";
import FormTextInput from "../components/form/FormTextInput";
import FormButton from "../components/form/FormButton";

const SingleSearchForm = ({ _data }) => {
  return (
    <div className="row">
      <div className="col-lg-12 p-5 bg-white rounded shadow-lg">
        <div className="col-lg-6">
          <FormHeader _iconName="search" _text="Search Profile"></FormHeader>
          <Form>
            <FormTextInput
              _iconName="search"
              _placeHolder="Profile's Name"
            ></FormTextInput>
            <FormButton
              _text="Search"
              _onClick={() => console.log("checkValidOnCheckOut()")}
            ></FormButton>
          </Form>
        </div>

        <SingleScrapingTable _data={_data}></SingleScrapingTable>
      </div>
    </div>
  );
};

export default SingleSearchForm;
