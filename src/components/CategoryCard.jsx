import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ img, categoryName, link }) => {
  return (
    <div className="relative mb-5 group">
      <Link to={link}>
        <img className="w-[100%] h-[100%]" src={img} alt={categoryName} />
        <div className="absolute w-[80%] leading-9 text-center bottom-4 left-1/2 -translate-x-1/2 bg-white/[.9] group-hover:bg-neutral group-hover:text-white duration-300">
          {categoryName}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
