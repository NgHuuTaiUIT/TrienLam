import { cloneDeep } from "lodash";
// import datas from "../assets/data/data_offline.json";

// export const getCategories = id => {
//   return datas.categories;
// };

export const getData = () =>{
  let data;
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
        data = cloneDeep(tempData);
      });
  };
   api();
   return data;
}