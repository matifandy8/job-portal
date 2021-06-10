import "./styles/Job.css";

interface Props {
  job: any;
}

export default function Job({ job }: Props) {
  return (
    <div className="job">
      <div>
        <img className="job__img" alt={job.company} src={job.company_logo} />
      </div>
      <div className="job__body">
        <div className="job__title">{job.job_description}</div>
        <div className="job__company">{job.company}</div>
        <div className="job__subtitle">{job.job_location}</div>
        <div className="job__badge">{job.job_full_time}</div>
      </div>
    </div>
  );
}
