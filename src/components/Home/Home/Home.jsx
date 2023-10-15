import React from "react";
import LeftStde from "./LeftStde";
import { useLoaderData } from "react-router-dom";
import NewsContainer from "../../Share/NewsContainer/NewsContainer";
import RightSite from "./RightSite";

const Home = () => {
  const news = useLoaderData()
  return (
    <div className="grid grid-cols-4 mt-6 gap-3">
      <div className="col-span-1">
        <h2 className="font-bold mb-4 ">All Caterogy</h2>
        <LeftStde></LeftStde>
      </div>
      <div className="col-span-2">
        {
          news.map(n => <NewsContainer news= {n} key={n._id}/>)
        }
      </div>
      <div className="col-span-1">
        <RightSite></RightSite>
      </div>
    </div>
  );
};

export default Home;
