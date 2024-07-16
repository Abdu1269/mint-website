import axiosBaseQuery from "@/shared/utitlity/axios-base-query";

const fetcher = async (url: string): Promise<any> => {
  const queryArgs = {
    url,
    method: "get",
  };
  const { data, error } = await axiosBaseQuery()(queryArgs);
  if (error) {
    throw new Error(error.data as string);
  }
  return data;
};

export default fetcher;
