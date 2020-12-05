import useClient from "./useClient";

const search = "/search";

const useSearchApi = () => {
  const client = useClient();
  const searchProfile = () => client.api.get(search);
  return { searchProfile };
};

export default useSearchApi;
