import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/Job.css";

interface Props {
  job: any;
}

export default function Job({ job }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="job">
      <div>
        <img className="job__img" alt={job.company} src={job.company_logo} />
      </div>
      <div className="job__body">
        <div className="job__title">{job.title}</div>
        <div className="job__company">{job.company}</div>
        <div className="job__subtitle">
          {new Date(job.created_at).toLocaleDateString()}
        </div>
        <div className="job__badge">{job.type}</div>
      </div>
    </div>
  );
}
