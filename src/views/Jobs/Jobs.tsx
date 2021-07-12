import { useEffect, useState } from "react";
import { getJobs } from "./API";
import Job from "./Job";
// import SearchForm from "./SearchForm";
import "./styles/Jobs.css";

function Jobs() {
  // const [params, setParams] = useState({});
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [status, setStatus] = useState("pending"); // resolved(ok)|rejected(BAD)|pending(default)

  useEffect(() => {
    fetchJobs();
    console.log(jobs);
  }, []);

  const fetchJobs = (): void => {
    getJobs()
      .then(({ data: { jobs } }: IJob[] | any) => setJobs(jobs))
      .then(() => setStatus("resolved"))
      .catch(() => setStatus("rejected"));
  };

  return (
    <div className="jobs">
      {/* <SearchForm params={params} /> */}
      {status === "pending" && <h1 className="alert-pending">Loading...</h1>}
      {status === "rejected" && (
        <h1 className="alert-failed">Something failed :(</h1>
      )}
      <div className="allJobs">
        {jobs.map((job: IJob) => (
          <Job job={job} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
