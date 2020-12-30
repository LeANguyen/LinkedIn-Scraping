import React, { useState } from "react";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import FormHeader from "./form/FormHeader";
import useScrapeApi from "../api/useScrapeApi";
import useApi from "../hooks/useApi";
import $ from "jquery";
import MultipleProfileModal from "./MultipleProfileModal";
import Container from "../components/Container";
import SingleProfileModal from "./SingleProfileModal";
import ModalList from "./ModalList";
import dummyData from "./dummyData";
import FormDownloadButton from "./form/FormDownloadButton";
import FormText from "./form/FormText";

const ScrapeProfileForm = () => {
  const [singleUrl, setSingleUrl] = useState();
  const [multipleQuery, setMultipleQuery] = useState();
  const [multipleQuantity, setMultipleQuantity] = useState();

  const scrapeApi = useScrapeApi();
  const scrapeSingleProfileApi = useApi(scrapeApi.scrapeSingleProfile);
  const scrapeMultipleProfileApi = useApi(scrapeApi.scrapeMultipleProfile);

  return (
    <Container>
      <div className="row">
        <div className="col-lg-6">
          <FormHeader _iconName="user" _text="Single Scraping"></FormHeader>
          <form>
            <FormTextInput
              _iconName="search"
              _placeHolder="Profile's URL"
              _onChange={event => setSingleUrl(event.target.value)}
            ></FormTextInput>
            {scrapeSingleProfileApi.isLoading && (
              <FormText
                _text="Scraping...Please Wait..."
                _variant="info"
              ></FormText>
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
            _onClick={() => scrapeSingleProfileApi.request(singleUrl)}
            _disabled={scrapeSingleProfileApi.isLoading}
          ></FormButton>

          {scrapeSingleProfileApi.success &&
            scrapeSingleProfileApi.data !== null && (
              <>
                <FormText
                  _variant="muted"
                  _text="Scraping Completed!!!"
                ></FormText>
                <div className="row">
                  <div className="col-6">
                    <FormDownloadButton
                      _variant="success"
                      _href={scrapeSingleProfileApi.downloadUrl}
                      _downnload="single"
                      _text="Download JSON"
                    ></FormDownloadButton>
                  </div>
                  <div className="col-6">
                    <FormButton
                      _variant="danger"
                      _onClick={() => {
                        $("#singleModal").modal("show");
                      }}
                      _text="View"
                    ></FormButton>
                  </div>
                </div>
              </>
            )}
        </div>

        <SingleProfileModal
          _id="singleModal"
          _title="Single Scraping Result"
          _downloadUrl={scrapeSingleProfileApi.downloadUrl}
          _downloadName={"single"}
          _downloadContent={
            <pre>{JSON.stringify(scrapeSingleProfileApi.data, null, "\t")}</pre>
          }
        ></SingleProfileModal>

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
              <FormText
                _text="Scraping...Please Wait..."
                _variant="info"
              ></FormText>
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

          <FormButton
            _variant="info"
            _text="Scrape Test"
            _onClick={() => $("#multipleModal").modal("show")}
            _disabled={scrapeMultipleProfileApi.isLoading}
          ></FormButton>

          <FormButton
            _variant="info"
            _text="Scrape"
            _onClick={() =>
              scrapeMultipleProfileApi.request(multipleQuery, multipleQuantity)
            }
            _disabled={scrapeMultipleProfileApi.isLoading}
          ></FormButton>

          {scrapeMultipleProfileApi.success &&
            scrapeMultipleProfileApi.data !== null && (
              <>
                <FormText
                  _variant="muted"
                  _text="Scraping Completed!!!"
                ></FormText>
                <div className="row">
                  <div className="col-6">
                    <FormDownloadButton
                      _variant="success"
                      _href={scrapeMultipleProfileApi.downloadUrl}
                      _downnload="multiple"
                      _text="Download JSON"
                    ></FormDownloadButton>
                  </div>
                  <div className="col-6">
                    <FormButton
                      _variant="danger"
                      _onClick={() => {
                        $("#multipleModal").modal("show");
                      }}
                      _text="View"
                    ></FormButton>
                  </div>
                </div>

                {/* <MultipleProfileModal
                  _id="multipleModal"
                  _title="Multitple Profile Result"
                  _downloadUrl={scrapeMultipleProfileApi.downloadUrl}
                  _downloadName={"multiple"}
                  _downloadContent={scrapeMultipleProfileApi.data}
                  // _downloadContent={dummyData}
                ></MultipleProfileModal>
                <ModalList
                  _data={scrapeMultipleProfileApi.data}
                  // _data={dummyData}
                ></ModalList> */}
              </>
            )}
        </div>
        <MultipleProfileModal
          _id="multipleModal"
          _title="Multitple Profile Result"
          _downloadUrl={scrapeMultipleProfileApi.downloadUrl}
          _downloadName={"multiple"}
          // _downloadContent={scrapeMultipleProfileApi.data}
          _downloadContent={dummyData}
        ></MultipleProfileModal>
        <ModalList
          // _data={scrapeMultipleProfileApi.data}
          _data={dummyData}
        ></ModalList>
      </div>
    </Container>
  );
};

export default ScrapeProfileForm;
