import React, { useState } from "react";
import logo from "../assets/logo.png";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import DownloadLink from "./DownloadLink";
import FormHeader from "./form/FormHeader";
import useScrapeApi from "../api/useScrapeApi";
import useApi from "../hooks/useApi";
import $ from "jquery";
import TextFileDownloadModal from "./TextFileDownloadModal";

const ScrapeProfileForm = () => {
  const [singleUrl, setSingleUrl] = useState();
  const [multipleQuery, setMultipleQuery] = useState();
  const [multipleQuantity, setMultipleQuantity] = useState();

  const scrapeApi = useScrapeApi();
  const scrapeSingleProfileApi = useApi(scrapeApi.scrapeSingleProfile);
  const scrapeMultipleProfileApi = useApi(scrapeApi.scrapeMultipleProfile);

  return (
    <div className="row p-4 bg-white rounded shadow-lg">
      <div className="col-lg-6">
        <FormHeader _iconName="user" _text="Single Scraping"></FormHeader>
        <form>
          <FormTextInput
            _iconName="search"
            _placeHolder="Profile's URL"
            _onChange={event => setSingleUrl(event.target.value)}
          ></FormTextInput>
          {scrapeSingleProfileApi.isLoading && (
            <p className="text-info text-center">Scraping...Please wait...</p>
          )}
          {scrapeSingleProfileApi.error && (
            <p className="text-danger text-center">
              There is a connection error!
            </p>
          )}
          {scrapeSingleProfileApi.success &&
            scrapeSingleProfileApi.data === null && (
              <p className="text-danger text-center">
                The tool failed to scrape any data!
              </p>
            )}
        </form>

        <FormButton
          _text="Scrape"
          _onClick={() => scrapeSingleProfileApi.request(singleUrl)}
          _disabled={scrapeSingleProfileApi.isLoading}
        ></FormButton>

        {scrapeSingleProfileApi.success &&
          scrapeSingleProfileApi.data !== null && (
            <>
              <DownloadLink
                _href={scrapeSingleProfileApi.downloadUrl}
                _downnload="single"
              ></DownloadLink>
              <FormButton
                _variant="danger"
                _onClick={() => {
                  $("#singleModal").modal("show");
                }}
                _text="Click here to view"
              ></FormButton>
            </>
          )}

        {/* <>
          <DownloadLink
            _href={scrapeSingleProfileApi.downloadUrl}
            _downnload="single"
          ></DownloadLink>
          <FormButton
            _variant="danger"
            _onClick={() => {
              $("#singleModal").modal("show");
            }}
            _text="Click here to view"
          ></FormButton>
        </> */}
      </div>

      <TextFileDownloadModal
        _id="singleModal"
        _downloadUrl={scrapeSingleProfileApi.downloadUrl}
        _downloadName={"single"}
        _downloadContent={
          <pre>{JSON.stringify(scrapeSingleProfileApi.data, null, "\t")}</pre>
        }
      ></TextFileDownloadModal>

      <div className="col-lg-6">
        <FormHeader _iconName="users" _text="Multiple Scraping"></FormHeader>
        <form>
          <FormTextInput
            _iconName="search"
            _placeHolder="Query Command"
            _onChange={event => setMultipleQuery(event.target.value)}
          ></FormTextInput>
          <FormTextInput
            _iconName="users"
            _placeHolder="Quantity"
            _inputType="number"
            _onChange={event => setMultipleQuantity(event.target.value)}
          ></FormTextInput>
          {scrapeMultipleProfileApi.isLoading && (
            <p className="text-info text-center">Scraping...Please wait...</p>
          )}
          {scrapeMultipleProfileApi.error && (
            <p className="text-danger text-center">
              There is a connection error!
            </p>
          )}
          {scrapeMultipleProfileApi.success &&
            scrapeMultipleProfileApi.data === null && (
              <>
                <p className="text-danger text-center">
                  The tool failed to scrape any data!
                </p>
                <p className="text-danger text-center">
                  Make sure your input is valid.
                </p>
              </>
            )}
        </form>

        <FormButton
          _text="Scrape"
          _onClick={() =>
            scrapeMultipleProfileApi.request(multipleQuery, multipleQuantity)
          }
          _disabled={scrapeMultipleProfileApi.isLoading}
        ></FormButton>

        {scrapeMultipleProfileApi.success &&
          scrapeMultipleProfileApi.data !== null && (
            <>
              <DownloadLink
                _href={scrapeSingleProfileApi.downloadUrl}
                _downnload="single"
              ></DownloadLink>
              <FormButton
                _variant="danger"
                _onClick={() => {
                  $("#multipleModal").modal("show");
                }}
                _text="Click here to view"
              ></FormButton>
            </>
          )}

        {/* <>
          <DownloadLink
            _href={scrapeSingleProfileApi.downloadUrl}
            _downnload="single"
          ></DownloadLink>
          <FormButton
            _variant="danger"
            _onClick={() => {
              $("#multipleModal").modal("show");
            }}
            _text="Click here to view"
          ></FormButton>
        </> */}

        <TextFileDownloadModal
          _id="multipleModal"
          _downloadUrl={scrapeMultipleProfileApi.downloadUrl}
          _downloadName={"multiple"}
          _downloadContent={
            <pre>
              {JSON.stringify(scrapeMultipleProfileApi.data, null, "\t")}
            </pre>
          }
        ></TextFileDownloadModal>
      </div>
    </div>
  );
};

export default ScrapeProfileForm;
