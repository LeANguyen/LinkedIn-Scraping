import React, { useState } from "react";

import Container from "../../Container";

import ScrapeSingleProfileForm from "./ScrapeSingleProfileForm";
import ScrapeMultipleProfileForm from "./ScrapeMultipleProfileForm";

const ScrapeProfileForm = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-lg-6">
          <ScrapeSingleProfileForm></ScrapeSingleProfileForm>
        </div>

        <div className="col-lg-6">
          <ScrapeMultipleProfileForm></ScrapeMultipleProfileForm>
        </div>
      </div>
    </Container>
  );
};

export default ScrapeProfileForm;
