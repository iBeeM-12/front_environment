import React, { useEffect, useState } from "react";
import axios from "axios";

export const Axios = () => {
  const [name, setName] = useState<[number, string, number]>([0, "hoge", 0]);

  useEffect(() => {
    const url = "http://localhost:8000/home/user/1";
    // const url_icon = "http://localhost:8000/home/user/icon/";

    axios
      .get(url)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        // 本当は型判定とかしたほうがよいが…
        // 詳しくは zod とか調べてみるとよいかも！？
        setName([res.data[0], res.data[1], res.data[2]]);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return <p>{name}</p>;
};
