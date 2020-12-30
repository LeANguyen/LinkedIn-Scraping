import React, { useState } from "react";
import SearchProfileTable from "./table/Table";
import FormHeader from "./form/FormHeader";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import useSearchApi from "../api/useSearchApi";

const SearchProfileForm = ({ _data }) => {
  const [search, setSearch] = useState();
  const searchApi = useSearchApi();
  const handleSubmit = () => {};

  return (
    <div className="row p-4 bg-white rounded shadow-lg">
      <div className="col-lg-6">
        <FormHeader _iconName="search" _text="Search Profile"></FormHeader>
        <form>
          <FormTextInput
            _iconName="search"
            _placeHolder="Profile's Name"
            _onChange={event => setSearch(event.target.value)}
          ></FormTextInput>
          <FormButton _text="Search" _onClick={() => searchApi.s}></FormButton>
        </form>
      </div>

      <div className="col-lg-12">
        <SearchProfileTable _data={_data}></SearchProfileTable>
      </div>
    </div>
  );
};

export default SearchProfileForm;
