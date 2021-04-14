import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
// import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";
import "./styles/Jobs.css";

function Jobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <div className="jobs">
      <SearchForm params={params} />
      {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <div className="allJobs">
        {jobs.map((job: any) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
      {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
    </div>
  );
}

export default Jobs;
