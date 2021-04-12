import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  job: any;
}

export default function Job({ job }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="job">
      <div className="job__body">
        <div className="d-flex justify-content-between">
          <div>
            <div className="job__title">
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </div>
            <div className="job__subtitle">
              {new Date(job.created_at).toLocaleDateString()}
            </div>
            <div className="job__badge">{job.type}</div>
            <div className="job__badge" style={{ wordBreak: "break-all" }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="job__img"
            height="50"
            alt={job.company}
            src={job.company_logo}
          />
        </div>
        <div className="job__text">
          <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
            {open ? "Hide Details" : "View Details"}
          </button>
        </div>
        <div className="job__collapse">
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
