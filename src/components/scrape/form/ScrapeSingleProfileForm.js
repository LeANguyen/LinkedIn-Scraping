import React, { useState } from "react";
import FormDownloadButton from "../../form/FormDownloadButton";
import FormText from "../../form/FormText";
import useDownloadUrl from "../../../hooks/useDownloadUrl";

import useScrapeApi from "../../../api/useScrapeApi";
import useApi from "../../../hooks/useApi";
import $ from "jquery";

import FormTextInput from "../../form/FormTextInput";
import FormButton from "../../form/FormButton";
import FormHeader from "../../form/FormHeader";

import SingleProfileModal from "../modal/SingleProfileModal";

import Loader from "react-loader-spinner";

const ScrapeSingleProfileForm = () => {
  const [singleUrl, setSingleUrl] = useState();
  const scrapeApi = useScrapeApi();
  const scrapeSingleProfileApi = useApi(scrapeApi.scrapeSingleProfile);

  const scrapeSingleProfileDownloadUrl = useDownloadUrl();

  const scrapeSingleProfileOnClick = async singleUrl => {
    const response = await scrapeSingleProfileApi.request(singleUrl);
    if (response.ok) {
      scrapeSingleProfileDownloadUrl.generate(response.data);
    }
  };

  return (
    <>
      <FormHeader _iconName="user" _text="Single Scraping"></FormHeader>
      <form>
        <FormTextInput
          _iconName="search"
          _placeHolder="Profile's URL"
          _onChange={event => setSingleUrl(event.target.value)}
        ></FormTextInput>
        {scrapeSingleProfileApi.isLoading && (
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
        {scrapeSingleProfileApi.error && (
          <FormText
            _text="There is a connection error!!!"
            _variant="danger"
          ></FormText>
        )}
        {scrapeSingleProfileApi.success &&
          scrapeSingleProfileApi.data === null && (
            <FormText
              _text="The tool failed to scrape any data!!!"
              _variant="danger"
            ></FormText>
          )}
      </form>

      <FormButton
        _variant="info"
        _text="Scrape"
        _onClick={() => {
          scrapeSingleProfileOnClick(singleUrl);
        }}
        _disabled={scrapeSingleProfileApi.isLoading}
      ></FormButton>

      {scrapeSingleProfileApi.success && scrapeSingleProfileApi.data !== null && (
        <>
          <FormText _variant="muted" _text="Scraping Completed!!!"></FormText>
          <div className="row">
            <div className="col-6">
              <FormButton
                _variant="danger"
                _onClick={() => {
                  $("#singleProfileModal").modal("show");
                }}
                _text="View"
              ></FormButton>
            </div>
            <div className="col-6">
              <FormDownloadButton
                _variant="info"
                _href={scrapeSingleProfileDownloadUrl.downloadUrl}
                _downnload={scrapeSingleProfileApi.data[0].name}
                _text="Download JSON"
              ></FormDownloadButton>
            </div>
          </div>

          <SingleProfileModal
            _id="singleProfileModal"
            _title="Single Scraping Result"
            _downloadUrl={scrapeSingleProfileDownloadUrl.downloadUrl}
            _downloadName={scrapeSingleProfileApi.data[0].name}
            _downloadContent={
              <pre>
                {JSON.stringify(scrapeSingleProfileApi.data, null, "\t")}
              </pre>
            }
          ></SingleProfileModal>
        </>
      )}
    </>
  );
};

export default ScrapeSingleProfileForm;
