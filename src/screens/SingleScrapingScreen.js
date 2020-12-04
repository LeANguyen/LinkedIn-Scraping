import React from "react";
import SingleScrapingTable from "../components/SingleScrapingTable";
import SingleScrapingForm from "../components/SingleScrapingForm";
import Screen from "../components/Screen";

const SingleScrapingScreen = () => {
  const data = [
    {
      key: 1,
      name: "Le An Nguyen 1",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 2",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 3",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 4",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 5",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 6",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 7",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 8",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 9",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 10",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 11",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 12",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 13",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 14",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 15",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    },
    {
      name: "Le An Nguyen 16",
      url:
        "https://www.linkedin.com/pulse/how-easy-scraping-data-from-linkedin-profiles-david-craven/"
    }
  ];
  return (
    <Screen>
      <div className="px-4 px-lg-0">
        <div className="container text-white py-5 text-center"></div>

        <div className="pb-5">
          <div className="container">
            <SingleScrapingForm></SingleScrapingForm>
            <div className="my-5">
              <SingleScrapingTable data={data}></SingleScrapingTable>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default SingleScrapingScreen;
