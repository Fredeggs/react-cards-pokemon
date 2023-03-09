import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (baseURL) => {
  const [response, setResponse] = useState([]);
  const addData = async (restOfUrl) => {
    console.log(`${baseURL}${restOfUrl}`);
    if (restOfUrl) {
      const res = await axios.get(`${baseURL}${restOfUrl}`);
      setResponse((r) => [...r, { ...res.data, id: uuid() }]);
    } else {
      const res = await axios.get(`${baseURL}`);
      setResponse((r) => [...r, { ...res.data, id: uuid() }]);
    }

    console.log(response);
  };

  return [response, addData];
};

export default useAxios;
