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
import SingleProfileModalList from "./SingleProfileModalList";
import dummyData from "./dummyData";
import FormDownloadButton from "./form/FormDownloadButton";
import FormText from "./form/FormText";
import useDownloadUrl from "../hooks/useDownloadUrl";

const ScrapeProfileForm = () => {
  const [singleUrl, setSingleUrl] = useState();
  const [multipleQuery, setMultipleQuery] = useState();
  const [multipleQuantity, setMultipleQuantity] = useState();

  const scrapeApi = useScrapeApi();
  const scrapeSingleProfileApi = useApi(scrapeApi.scrapeSingleProfile);
  const scrapeMultipleProfileApi = useApi(scrapeApi.scrapeMultipleProfile);

  const scrapeSingleProfileDownloadUrl = useDownloadUrl();
  const scrapeMultipleProfileDownloadUrl = useDownloadUrl();

  const scrapeSingleOnClick = async singleUrl => {
    const response = await scrapeSingleProfileApi.request(singleUrl);
    if (response.ok) {
      scrapeSingleProfileDownloadUrl.generate(response.data);
    }
  };

  const scrapeMultipleOnClick = async (multipleQuery, multipleQuantity) => {
    const response = await scrapeMultipleProfileApi.request(
      multipleQuery,
      multipleQuantity
    );
    if (response.ok) {
      scrapeMultipleProfileDownloadUrl.generate(response.data);
    }
  };

  const dummyScrapeOnClick = async () => {
    const response = scrapeMultipleProfileApi.request();
    if (response.ok) {
      scrapeMultipleProfileDownloadUrl.generate(response.data);
    }
  };

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
            _onClick={() => {
              scrapeSingleOnClick(singleUrl);
              // scrapeSingleProfileApi.request(singleUrl);
            }}
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
        </div>

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
            _onClick={() => $("#multipleProfileModal").modal("show")}
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
                      _href={scrapeMultipleProfileApi.downloadUrl}
                      _downnload={multipleQuery + " " + multipleQuantity}
                      _text="Download JSON"
                    ></FormDownloadButton>
                  </div>
                </div>

                {/* <MultipleProfileModal
                  _id="multipleProfileModal"
                  _title="Multiple Profile Result"
                  _downloadUrl={scrapeMultipleProfileApi.downloadUrl}
                  _downloadName={multipleQuery + " " + multipleQuantity}
                  _downloadContent={scrapeMultipleProfileApi.data}
                ></MultipleProfileModal>
                <SingleProfileModalList
                  _id="singleProfileModal"
                  _data={scrapeMultipleProfileApi.data}
                ></SingleProfileModalList> */}
              </>
            )}
        </div>
        <MultipleProfileModal
          _id="multipleProfileModal"
          _title="Multiple Profile Result"
          _downloadUrl={scrapeSingleProfileDownloadUrl.downloadUrl}
          _downloadName={"multiple"}
          // _downloadContent={scrapeMultipleProfileApi.data}
          _downloadContent={dummyData}
        ></MultipleProfileModal>
        <SingleProfileModalList
          _id="singleProfileModal"
          // _data={scrapeMultipleProfileApi.data}
          _data={dummyData}
        ></SingleProfileModalList>
      </div>
    </Container>
  );
};

export default ScrapeProfileForm;
