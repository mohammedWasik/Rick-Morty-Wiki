import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingthree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree">
            Gender
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div className="accordion-body d-flex flex-wrap gap-2 ">
            {genders.map((item, index) => (
              <FilterBTN
                task={setGender}
                setPageNumber={setPageNumber}
                key={index}
                name="gender"
                index={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
