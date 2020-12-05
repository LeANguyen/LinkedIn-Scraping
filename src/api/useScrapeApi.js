import useClient from "./useClient";

const scrape = "/scrape";

const useScrapeApi = () => {
  const client = useClient();
  const scrapeProfile = () => client.api.get(scrape);
  return { scrapeProfile };
};

export default useScrapeApi;
