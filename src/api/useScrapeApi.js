import useClient from "./useClient";

const useScrapeApi = () => {
  const client = useClient();
  const scrapeSingleProfile = url => client.api.get("/single?" + "url=" + url);

  const scrapeMultipleProfile = (query, quantity) => {
    const res = query.split(" ");
    var i;
    var q = res[0];
    for (i = 1; i < res.length; i++) {
      q = q + "+" + res[i];
    }
    console.log(q);
    return client.api.get("/multiple?" + "q=" + q + "&n=" + quantity);
  };

  return { scrapeSingleProfile, scrapeMultipleProfile };
};

export default useScrapeApi;
