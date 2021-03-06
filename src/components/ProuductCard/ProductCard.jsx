import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import RatStars from "../Product/RateStars";
import SwitchColors from "../Product/SwitchColors";
import SwitchSizes from "../Product/SwitchSizes";
import img from "./PlaceholderImage/Capture.PNG";

export default function ProductCard({ productInfo }) {
  const variants = productInfo.variants.filter(
    (varient) => varient.sizes.length > 0
  );
  const colors = variants.map((variant) => variant.color);
  // const sizes = ["xs", "s", "sm", "xl", "xxl"];

  const [color, setColor] = useState(colors[0]);

  const sizes = variants
    .find((variant) => variant.color === color)
    .sizes.map((size) => (size ? size.size : 0));

  const [size, setSize] = useState(sizes[0]);

  return (
    <div className="container py-5 border border-rose-600">
      <div className="card w-72 bg-white drop-shadow-md rounded-lg">
        <img
          className="object-cover rounded-tl-lg rounded-tr-lg"
          src={img}
          alt=""
        />
        <div className="ml-1">
          <div className="space-y-2">
            <h3 className="text-xs text-light pt-2">
              {productInfo.brand || "Dolce & Gabbana"}
            </h3>
            <p className="text-xs text-neutral-500">
              {" "}
              {productInfo.title || "Jersey Graphic Tee Dolce"}
            </p>
          </div>
          <p className="space-x-2 mt-1">
            <span className="text-xl">{size}</span>
          </p>
          <div className="colors flex justify-between w-[100%] mt-3 mb-4">
            <SwitchColors
              colors={colors}
              onChangeColorStateHandler={setColor}
              currentColorState={color}
              circleSize={"1.2rem"}
            />
          </div>
          <div className="productSize flex justify-between w-[100%] text-center mb-4">
            <SwitchSizes
              sizes={sizes}
              onChangeSizeStateHandler={setSize}
              currentSizeState={size}
              boxSize={"0.4rem"}
            />
          </div>
          <div className="flex justify-start items-center pt-3 pb-2  mt-1">
            <Link
              to="#"
              className="w-[60%] py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300 flex  justify-evenly"
            >
              <span>
                <BiShoppingBag className=" text-xl " />
              </span>
              <span> Add to Cart</span>
            </Link>

            <Link
              to="#"
              title="Add to Favorites"
              className="text-2xl text-neutarl mx-5 duration-300"
            >
              <BsSuitHeart />
            </Link>
          </div>
          <div className=" my-3">
            <RatStars
              size={15}
              value={productInfo.ratingsAverage}
              onChange={""}
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
