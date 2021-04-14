import React from "react";
import "./styles/SearchForm.css";
// import { BiSearch } from "react-icons/bi";<BiSearch />

interface Props {
  params: any;
}

export default function SearchForm({ params }: Props) {
  return (
    <form className="searchForm">
      <div className="searchForm__row">
        <div className="searchForm__group">
        
          <input
            value={params.description}
            placeholder="Search by Job Title"
            name="title"
            type="text"
          />
        </div>
      </div>
    </form>
  );
}
