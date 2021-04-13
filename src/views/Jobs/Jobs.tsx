import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
// import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function Jobs() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e: React.FormEvent<HTMLInputElement>) {
    const param = e.currentTarget.name;
    const value = e.currentTarget.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div className="jobs">
      <h1 className="jobs__title"> Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map((job: any) => {
        return <Job key={job.id} job={job} />;
      })}
      {/* <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> */}
    </div>
  );
}

export default Jobs;
