import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../Constant";

function Search() {
  const [status, setStatus] = useState("Checking connection...");

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/check`)
      .then((res) => {
        setStatus(res.data.message);
      })
      .catch((err) => {
        setStatus("Failed to connect to backend");
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{status}</h1>
      </div>
    </>
  );
}

export default Search;
