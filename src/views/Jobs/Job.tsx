import "./styles/Job.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useHistory } from "react-router-dom";

interface Props {
  job: any;
}

export default function Job({ job }: Props) {
  const history = useHistory();
  const viewInfoJob = () => {
    history.push(`/jobs/${job.job_description}`);
  };

  return (
    <div className="job" onClick={viewInfoJob}>
      <div>
        <img className="job__img" alt={job.company} src={job.company_logo} />
      </div>
      <div className="job__body">
        <div className="job__title">{job.job_description}</div>
        <div className="job__company">{job.company}</div>
        <div className="job__subtitle">{job.job_location}</div>
        <div className="job__badge">{job.job_full_time}</div>
      </div>
      <div className="job__save">
        <AiOutlineHeart />
        Save
      </div>
    </div>
  );
}
