import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 ">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search For Charecter"
        className={`${styles.input}`}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`btn btn-primary `}>
        Search
      </button>
    </form>
  );
};

export default Search;
