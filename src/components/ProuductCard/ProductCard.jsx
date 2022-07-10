import { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { BsSuitHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import RatStars from '../Product/RateStars';
import SwitchColors from '../Product/SwitchColors';
import SwitchSizes from '../Product/SwitchSizes';
import img from './PlaceholderImage/Capture.PNG';

const colors = ['#999966', ' #E6B333', '#9900B3', '#CC80CC', '#991AFF'];
const sizes = ['xs', 's', 'sm', 'xl', 'xxl'];
export default function ProductCard() {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  // const product = {
  //   brand: 'Deon_Halvorson98',
  //   title: 'April.Runolfsdottir',
  //   category: 'T-shirts',
  //   variants: [
  //     {
  //       size: 'S',
  //       price: 42,
  //       color: ' #E6B333',
  //       count: 54,
  //     },
  //     {
  //       size: 'XXL',
  //       price: 62,
  //       color: ' #999966',
  //       count: 77,
  //     },
  //     {
  //       size: 'L',
  //       price: 10,
  //       color: '#FFB399',
  //       count: 67,
  //     },
  //     {
  //       size: 'L',
  //       price: 11,
  //       color: '#991AFF',
  //       count: 49,
  //     },
  //     {
  //       size: 'XXL',
  //       price: 26,
  //       color: ' #3366E6',
  //       count: 31,
  //     },
  //     {
  //       size: 'XL',
  //       price: 44,
  //       color: ' #9900B3',
  //       count: 76,
  //     },
  //     {
  //       size: 'S',
  //       price: 64,
  //       color: '#CC80CC ',
  //       count: 47,
  //     },
  //   ],
  //   description: 'Ulices71',
  //   ratingsAverage: 1,
  //   brand_thumbnail: 'Milan.Collier69',
  //   ratingsQuantity: 16,
  // };

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
            <h3 className="text-xs text-light pt-2">Dolce & Gabbana</h3>
            <p className="text-xs text-neutral-500">Jersey Graphic Tee Dolce</p>
          </div>
          <p className="space-x-2 mt-1">
            <span className="text-xl">{size}</span>
          </p>
          <div className="colors flex justify-between w-[100%] mt-3 mb-4">
            <SwitchColors
              colors={colors}
              onChangeColorStateHandler={setColor}
              currentColorState={color}
              circleSize={'1.2rem'}
            />
          </div>
          <div className="productSize flex justify-between w-[100%] text-center mb-4">
            <SwitchSizes
              sizes={sizes}
              onChangeSizeStateHandler={setSize}
              currentSizeState={size}
              boxSize={'0.4rem'}
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
            <RatStars size={15} value={5} onChange={''} readOnly={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
