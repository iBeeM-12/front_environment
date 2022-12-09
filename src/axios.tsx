import React, { useEffect, useState } from "react";
import axios from "axios";

export const Axios = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // const url = "127.0.0.1:8000"
    const url = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(url)
      .then((res) => {
        // console.log(res.data[0].name);
        setName(res.data[0].name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <p>{name}</p>;
};
