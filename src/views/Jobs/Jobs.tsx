import { useEffect, useState } from "react";
import { getJobs } from "./API";
import Job from "./Job";
import SearchForm from "./SearchForm";
import "./styles/Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = (): void => {
    getJobs()
      .then(({ data: { jobs } }: IJob[] | any) => setJobs(jobs))
      .catch((err: Error) => console.log(err));
  };

  return (
    <div className="jobs">
      {/* <SearchForm params={params} /> */}

      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>} */}
      <div className="allJobs">
        {jobs.map((job: IJob) => (
          <div key={job._id}>{job.description}</div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
