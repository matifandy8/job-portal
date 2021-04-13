import React from "react";
import "./styles/SearchForm.css";

interface Props {
  params: any;
  onParamChange: any;
}

export default function SearchForm({ params, onParamChange }: Props) {
  return (
    <form className="searchForm">
      <div className="searchForm__row">
        <div className="searchForm__group">
          <input
            onChange={onParamChange}
            value={params.description}
            placeholder="Search by Job Description"
            name="description"
            type="text"
          />
        </div>
        <div className="searchForm__group">
          <input
            onChange={onParamChange}
            value={params.location}
            placeholder="Search by Job Location"
            name="location"
            type="text"
          />
        </div>
        <div className="searchForm__group">
          <input
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            placeholder="Only Full Time"
            type="checkbox"
            className="mb-2"
          />
        </div>
      </div>
    </form>
  );
}
