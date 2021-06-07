import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:5000/jobs";

export const getJobs = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const jobs: AxiosResponse<ApiDataType> = await axios.get(baseUrl);
    console.log(jobs.data);
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};
