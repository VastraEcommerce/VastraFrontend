import React from "react";

const CategoryCard = ({ img, categoryName }) => {
  return (
    <div className="p-5">
      <img className="w-[100%] h-[100%]" src={img} alt={categoryName} />
      <div className="">{categoryName}</div>
    </div>
  );
};

export default CategoryCard;
