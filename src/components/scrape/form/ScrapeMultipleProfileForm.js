import React, { useState, useEffect } from "react";
import dummyData from "../../dummyData";
import FormDownloadButton from "../../form/FormDownloadButton";
import FormText from "../../form/FormText";
import useDownloadUrl from "../../../hooks/useDownloadUrl";

import useScrapeApi from "../../../api/useScrapeApi";
import useApi from "../../../hooks/useApi";
import $ from "jquery";

import SingleProfileModalList from "../modal/SingleProfileModalList";
import MultipleProfileModal from "../modal/MultipleProfileModal";

import FormTextInput from "../../form/FormTextInput";
import FormButton from "../../form/FormButton";
import FormHeader from "../../form/FormHeader";
import Loader from "react-loader-spinner";

const ScrapeMultipleProfileForm = () => {
  const [query, setQuery] = useState();
  const [quantity, setQuantity] = useState();

  const scrapeApi = useScrapeApi();
  const scrapeMultipleProfileApi = useApi(scrapeApi.scrapeMultipleProfile);
  const scrapeMultipleProfileDownloadUrl = useDownloadUrl();

  const scrapeMultipleProfileOnClick = async (query, quantity) => {
    const response = await scrapeMultipleProfileApi.request(query, quantity);
    if (response.ok) {
      scrapeMultipleProfileDownloadUrl.generate(response.data);
    }
  };

  useEffect(() => {
    scrapeMultipleProfileDownloadUrl.generate(dummyData);
  }, []);

  return (
    <>
      <FormHeader _iconName="users" _text="Multiple Scraping"></FormHeader>
      <form>
        <FormTextInput
          _iconName="search"
          _placeHolder="Query Command"
          _onChange={event => setQuery(event.target.value)}
        ></FormTextInput>
        <FormTextInput
          _iconName="users"
          _placeHolder="Quantity"
          _inputType="number"
          _onChange={event => setQuantity(event.target.value)}
        ></FormTextInput>
        {scrapeMultipleProfileApi.isLoading && (
          <>
            <Loader
              className="text-center text-info"
              color="rgb(73, 160, 181)"
              type="ThreeDots"
              height="100"
              width="100"
            />
            <FormText
              _text="Scraping...Please Wait..."
              _variant="info"
            ></FormText>
          </>
        )}
        {scrapeMultipleProfileApi.error && (
          <FormText
            _text="There is a connection error!!!"
            _variant="danger"
          ></FormText>
        )}
        {scrapeMultipleProfileApi.success &&
          scrapeMultipleProfileApi.data === null && (
            <FormText
              _text="The tool failed to scrape any data!!!"
              _variant="danger"
            ></FormText>
          )}
      </form>

      {/* <FormButton
        _variant="info"
        _text="Scrape Dummy"
        _onClick={() => $("#multipleProfileModal").modal("show")}
        _disabled={scrapeMultipleProfileApi.isLoading}
      ></FormButton> */}

      <FormButton
        _variant="info"
        _text="Scrape"
        _onClick={() => scrapeMultipleProfileOnClick(query, quantity)}
        _disabled={scrapeMultipleProfileApi.isLoading}
      ></FormButton>

      {scrapeMultipleProfileApi.success &&
        scrapeMultipleProfileApi.data !== null && (
          <>
            <FormText _variant="muted" _text="Scraping Completed!!!"></FormText>
            <div className="row">
              <div className="col-6">
                <FormButton
                  _variant="danger"
                  _onClick={() => {
                    $("#multipleProfileModal").modal("show");
                  }}
                  _text="View"
                ></FormButton>
              </div>
              <div className="col-6">
                <FormDownloadButton
                  _variant="info"
                  _href={scrapeMultipleProfileDownloadUrl.downloadUrl}
                  _downnload={query + " " + quantity}
                  _text="Download JSON"
                ></FormDownloadButton>
              </div>
            </div>

            <MultipleProfileModal
              _id="multipleProfileModal"
              _title="Multiple Profile Result"
              _downloadUrl={scrapeMultipleProfileDownloadUrl.downloadUrl}
              _downloadName={query + " " + quantity}
              _downloadContent={scrapeMultipleProfileApi.data}
            ></MultipleProfileModal>
            <SingleProfileModalList
              _id="singleProfileModal"
              _data={scrapeMultipleProfileApi.data}
            ></SingleProfileModalList>
          </>
        )}
      {/* <MultipleProfileModal
        _id="multipleProfileModal"
        _title="Multiple Profile Result"
        _downloadUrl={scrapeMultipleProfileDownloadUrl.downloadUrl}
        _downloadName={"multiple"}
        _downloadContent={dummyData}
      ></MultipleProfileModal>
      <SingleProfileModalList
        _id="singleProfileModal"
        _data={dummyData}
      ></SingleProfileModalList> */}
    </>
  );
};

export default ScrapeMultipleProfileForm;
