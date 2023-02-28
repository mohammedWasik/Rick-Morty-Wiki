import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Card = ({ results, page }) => {
  let display = "";

  if (!results) {
    display = "No Characters Found :(";
  } else {
    display = results.map((item) => {
      let { id, name, image, location, status } = item;
      return (
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`img-fluid ${styles.img}`} />
            <div className={` ${styles.content}`}>
              <div className="fs-5 fw-bold m-1 text-primary">{name}</div>
              <div className="">
                <div className="fs-6 fw-bold m-1">Last Location:</div>
                <div className="fs-6 m-1">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  }
  return <>{display}</>;
};

export default Card;
