import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "../Components/Filters/Filters";
import Cards from "../Components/Cards/Card";
import Pagination from "../Components/Pagination/Pagination";
import Search from "../Components/Search/Search";

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async () => {
      let apiResult = await fetch(api).then((res) => res.json());
      updateFetchedData(apiResult);

      console.log("dataFromHome", apiResult);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Character</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default Home;
