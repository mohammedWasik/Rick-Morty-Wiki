import React from "react";

const InputGroup = ({ total, name, setId }) => {
  console.log();
  return (
    <div class="input-group mb-3">
      <select
        class="form-select"
        id={name}
        onChange={(e) => {
          setId(e.target.value);
        }}>
        {/* <option value="1" selected>
          Choose...
        </option> */}

        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name}- {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
