import { useEffect, useState } from "react";

const useCurrancyInfo = (currency) => {
  const [data , setData]=useState({});
  useEffect(() => {
    
    const Url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(Url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
  
};

export default useCurrancyInfo;
