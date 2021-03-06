import { useState } from 'react';
import ImagesSlider from '../components/Product/ImagesSlider';
import RateStars from '../components/Product/RateStars';
import SwitchColors from '../components/Product/SwitchColors';
import SwitchSizes from '../components/Product/SwitchSizes';
const colors = ['#fff', '#f00', '#0f0', '#00f'];
const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
const images = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
  'https://swiperjs.com/demos/images/nature-6.jpg',
  'https://swiperjs.com/demos/images/nature-7.jpg',
  'https://swiperjs.com/demos/images/nature-8.jpg',
];
export default function ProductDetails() {
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <div className="capitalize text-center py-4 text-xs md:text-sm xl:text-start">
        home / {'productName'}
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex-grow w-full lg:w-[50%] md:basis-[calc(50%-1.5rem)] ">
          <ImagesSlider images={images} />
        </div>
        <div className=" flex-grow w-full md:basis-[calc(50%-1.5rem)] flex flex-col text-center lg:text-start gap-y-4">
          <div className="flex gap-x-2 justify-center capitalize text-sm lg:justify-start">
            <span className="badge-error text-white px-2">{'hot'}</span>
            <span className="badge-info text-white px-2">{'in stock'}</span>
          </div>
          <h1 className="text-xl lg:text-2xl">{'Skinny mid-rise trousers'}</h1>
          <div className="border-black flex justify-center lg:justify-start gap-x-2">
            <RateStars size={25} readOnly />
            <span className="underline uppercase font-thin">{'3 reviews'}</span>
          </div>
          <div>
            <span className="uppercase text-slate-500">{'Brand'}:</span>
            <span className="capitalize">{'Polo'}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl">${'171.00'}</h1>
          <h3>
            Hurry! Only <span className="text-red-600">{6}</span> left in Stock!
          </h3>
          <progress className="progress w-full" value={70} max={100}></progress>
          <hr className="my-5" />
          <div>
            <h1 className="uppercase font-thin mb-3">colors:{color}</h1>
            <SwitchColors
              colors={colors}
              onChangeColorStateHandler={setColor}
              currentColorState={color}
              circleSize={25}
              className="px-2 py-1 gap-6"
            />
          </div>
          <div>
            <h1 className="uppercase font-thin mb-3">sizes:{size}</h1>
            <SwitchSizes
              sizes={sizes}
              onChangeSizeStateHandler={setSize}
              currentSizeState={size}
              boxSize={10}
              className="py-2 px-1 gap-x-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
