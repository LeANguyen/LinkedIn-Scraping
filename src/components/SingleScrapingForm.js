import React from "react";
import SingleScrapingTable from "./SingleScrapingTable";
import logo from "../assets/logo.png";

const SingleScrapingForm = () => {
  return (
    <div className="row py-5 p-4 bg-white rounded shadow-lg">
      <div className="col-lg-6">
        <div className="bg-dark text-white rounded-pill px-4 py-3 font-weight-bold">
          Scrape Single Profile
        </div>
        <div className="p-4">
          <form>
            <div className="form-group">
              <strong className="text-muted">Profile's URL:</strong>

              <div class="input-group mt-2 mb-4">
                <div class="input-group-append">
                  <span class="input-group-text rounded-left">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Profile's URL"
                  aria-label="from"
                  aria-describedby="from"
                ></input>
              </div>

              <button
                className="btn btn-info rounded-pill py-2 my-5 btn-block"
                id="checkout_btn"
                style={{ color: "white" }}
                onClick={() => console.log("checkValidOnCheckOut()")}
              >
                Scrape
              </button>
              <p className="text-center text-muted my-2 font-weight-bold">
                Your file is ready
              </p>
              <a href={logo} download>
                <p className="text-center font-weight-bold">
                  Click to download
                </p>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="bg-dark text-white rounded-pill px-4 py-3 font-weight-bold">
          Scrape Multiple Profile
        </div>
        <div className="p-4">
          <form>
            <div className="form-group">
              <strong className="text-muted">Query Command:</strong>

              <div class="input-group mt-2 mb-4">
                <div class="input-group-append">
                  <span class="input-group-text rounded-left">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Query Command"
                  aria-label="from"
                  aria-describedby="from"
                ></input>
              </div>

              <strong className="text-muted">Quantity:</strong>
              <div class="input-group mt-2 mb-4">
                <div class="input-group-append">
                  <span class="input-group-text rounded-left">
                    <i class="fa fa-users"></i>
                  </span>
                </div>
                <input
                  type="number"
                  id="quantity_input${data[i].item_id}"
                  oninput="this.value = Math.abs(this.value)"
                  class="form-control"
                  step="1"
                  max="9999"
                  min="1"
                  onfocusin="quantity_focus(this.value)"
                  onchange="quantity_edit(${data[i].item_id})"
                ></input>
              </div>

              <button
                className="btn btn-info rounded-pill py-2 btn-block"
                id="checkout_btn"
                style={{ color: "white" }}
                onClick={() => console.log("checkValidOnCheckOut()")}
              >
                Scrape
              </button>

              <p className="text-center text-muted my-2 font-weight-bold">
                Your file is ready
              </p>

              <a href={logo} download>
                <p className="text-center font-weight-bold">
                  Click to download
                </p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleScrapingForm;
