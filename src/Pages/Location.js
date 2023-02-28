import React, { useEffect, useState } from "react";
import Card from "../Components/Cards/Card";
import InputGroup from "../Components/Filters/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      console.log("dataa", data);
      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      console.log("aaaa", a);
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-4">
          Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h4 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h4>
        <h5 className="text-center mb-4 ">
          Type : {type === "" ? "Unknown" : type}
        </h5>
        <h3 className="text-center text-primary">Residents :</h3>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-3">Pick Location</h4>
          <InputGroup total={126} name="Location" setId={setId} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/Location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
