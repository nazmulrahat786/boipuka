import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {

  const { bookName, image,bookId, rating, category, tags } = singleBook;


  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm border p-3">
          <figure className="p-3 bg-gray-100 w-2/3 mx-auto ">
            <img className="h-[166px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-center gap-2 text-green-400">
              {" "}
              {tags.map((tag) => (
                <button> {tag} </button>
              ))}{" "}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">
                {rating}
                <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
