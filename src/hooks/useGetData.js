import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";

export const useGetData = () => {
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    const api = async () => {
      await fetch(`${process.env.PUBLIC_URL}/assets/data/data.json`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        //   Accept: "application/json"
        // }
      })
        .then(res => console.log(res.json()))
        .then(data => {
          console.log(data);
          const tempData = cloneDeep(JSON.parse(data));
          setNewsData(cloneDeep(tempData));
        });
    };
    api();
  }, []);
  return newsData;
};
