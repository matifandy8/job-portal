import React from "react";

interface Props {
  params: any;
  onParamChange: any;
}

export default function SearchForm({ params, onParamChange }: Props) {
  return (
    <form className="SearchForm">
      <div className="SearchForm__row">
        <div className="SearchForm__group">
          <label>Description</label>
          <input
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
          />
        </div>
        <div className="SearchForm__group">
          <label>Location</label>
          <input
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          />
        </div>
        <div className="SearchForm__group">
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
