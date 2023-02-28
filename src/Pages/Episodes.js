import React, { useEffect, useState } from "react";
import Card from "../Components/Cards/Card";
import InputGroup from "../Components/Filters/Category/InputGroup";

const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date: ad, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async () => {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h4 className="text-center">Airdate : {ad === "" ? "Unknown" : ad}</h4>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup total={51} name="Episode" setId={setId} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/Episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
