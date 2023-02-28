import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown "];

  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            Status
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-2">
            {status.map((items, index) => (
              <FilterBTN
                task={setStatus}
                setPageNumber={setPageNumber}
                key={index}
                name={status}
                index={index}
                item={items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
