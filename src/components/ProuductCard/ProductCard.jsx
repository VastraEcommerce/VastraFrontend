// import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsSuitHeart } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";
import RatStars from "../Product/RateStars";
import SwitchColors from "../Product/SwitchColors";
import SwitchSizes from "../Product/SwitchSizes";

import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddCartItemMutation } from "../../services/cartItemsApi";

export default function ProductCard({ productInfo }) {
  const [addCartItem] = useAddCartItemMutation();

  console.log({ productInfo });

  const [variant, setVariant] = useState(() => productInfo?.variants[0]);
  const [size, setSize] = useState(variant?.sizes[0]);
  const [color, setColor] = useState(variant?.color);

  console.log(size);

  const colors = useMemo(
    () => productInfo?.variants?.map((variant) => variant.color),
    [productInfo]
  );

  useEffect(() => {
    const variant = productInfo?.variants?.find(
      (variant) => variant?.color === color
    );
    setVariant(variant);
    setSize(variant?.sizes[0]);
  }, [color, productInfo?.variants]);

  useEffect(() => {
    setVariant(productInfo?.variants[0]);
    setColor(productInfo?.variants[0]?.color);
    setSize(productInfo?.variants[0]?.sizes[0]);
  }, [productInfo]);

  const navigate = useNavigate();

  const [bagVarient, setBagVarient] = useState({
    productId: productInfo._id,
    title: productInfo.title,
    description: productInfo.description,
    brand: productInfo.brand,
    size: size.size,
    price: size.price,
    image: variant.images[0],
    quantity: 1,
  });
  const addProductToBag = () => {
    setBagVarient({
      ...bagVarient,
      price: size?.price,
      size: size.size,
      image: variant?.images[0],
    });
    addCartItem(bagVarient);
  };

  return (
    <div className='card my-5 mx-3 max-w-[270px] bg-white drop-shadow-md rounded-lg'>
      <img
        className='object-cover rounded-tl-lg rounded-tr-lg cursor-pointer'
        src={`${process.env.REACT_APP_BASE_URL}${productInfo.variants[0].images[0]}`}
        alt=''
        onClick={() => navigate(`/products/${productInfo._id}`)}
      />
      <div className='ml-1'>
        <div className='space-y-2'>
          <h3 className='text-xs text-light pt-2'>
            {productInfo.brand || "Dolce & Gabbana"}
          </h3>
          <p className='text-xs text-neutral-500'>
            {" "}
            {productInfo.title || "Jersey Graphic Tee Dolce"}
          </p>
        </div>
        <p className='space-x-2 mt-1'>
          <span className='text-xl'>${size?.price}</span>
        </p>
        <div className='colors flex justify-between w-[100%] mt-3 mb-4'>
          <SwitchColors
            colors={colors}
            onChangeColorStateHandler={setColor}
            currentColorState={color}
            circleSize={"1.2rem"}
          />
        </div>
        <div className='productSize flex justify-between w-[100%] text-center mb-4'>
          <SwitchSizes
            sizes={variant?.sizes}
            onChangeSizeStateHandler={setSize}
            currentSizeState={size.size}
            boxSize={"0.5rem"}
          />
        </div>
        <div className='flex justify-start items-center pt-3 pb-2  mt-1'>
          <button
            onClick={addProductToBag}
            className='w-[60%] py-2 border border-neutral hover:bg-neutral hover:text-white text-center text-sm text-neutral-800  duration-300 flex  justify-evenly'>
            <span>
              <BiShoppingBag className=' text-xl ' />
            </span>
            <span> Add to Cart</span>
          </button>

          <Link
            to='#'
            title='Add to Favorites'
            className='text-2xl text-neutarl mx-5 duration-300'>
            <BsSuitHeart />
          </Link>
        </div>
        <div className=' my-3'>
          <RatStars
            size={15}
            value={productInfo.ratingsAverage}
            onChange={""}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
}
