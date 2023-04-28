import React from "react";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsContainer = ({ news }) => {
  const {
    _id,
    title,
    author,
    image_url,
    details,
  } = news;

//   stok = thumbnail_url,category_id, rating, total_view,

  return (
    <div className="mx-4 my-6 border">
      <div className="flex justify-between items-center bg-gray-100 rounded p-4">
        <div className="flex gap-6">
          <img src={author.img} className="w-10 h-10 rounded-full" alt="" />
          <div>
            <h4>{author.name}</h4>
            <p>{author.published_date} </p>
          </div>
        </div>
        <div className="flex gap-3 ">
          <p>
            <FaRegBookmark className=" h-6 w-6" />
          </p>
          <p>
            <FaShareAlt className=" h-6 w-6" />
          </p>
        </div>
      </div>
      <div className=" p-4">
        <h2 className="font-bold  text-xl text-neutral-700 py-4">{title} </h2>
        <img src={image_url} alt="" />
        <p className="py-6 text-neutral-600">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link className="text-blue-600" to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          )}
        </p>
      </div>
      <div>
        <footer>
            
        </footer>
      </div>
    </div>
  );
};

export default NewsContainer;
