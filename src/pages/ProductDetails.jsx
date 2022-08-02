import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../services/productApi';

import ImagesSlider from '../components/Product/ImagesSlider';
import RateStars from '../components/Product/RateStars';
import SwitchColors from '../components/Product/SwitchColors';
import SwitchSizes from '../components/Product/SwitchSizes';
import Reviews from '../components/Reviews/Reviews';

export default function ProductDetails() {
  const { pathname } = useLocation();
  const params = useParams();
  const id = params.productId;

  const { data, isError, isLoading } = useGetProductByIdQuery(id);

  const [variant, setVariant] = useState(() => data?.variants[0]);
  const [size, setSize] = useState(variant?.sizes[0]);
  const [color, setColor] = useState(variant?.color);

  const colors = useMemo(
    () => data?.variants?.map((variant) => variant.color),
    [data]
  );

  useEffect(() => {
    const variant = data?.variants?.find((variant) => variant?.color === color);
    setVariant(variant);
    setSize(variant?.sizes[0]);
  }, [color, data?.variants]);

  useEffect(() => {
    setVariant(data?.variants[0]);
    setColor(data?.variants[0]?.color);
    setSize(data?.variants[0]?.color);
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isError) return <div>There is error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="capitalize text-center py-4 text-xs md:text-sm xl:text-start">
        home / {data.category} / {data.brand}
      </div>
      <div className="flex flex-wrap justify-between gap-6 shadow-xl">
        <div className="flex-grow min-h-[600px] w-full lg:w-[50%] md:basis-[calc(50%-1.5rem)] ">
          {variant && <ImagesSlider images={variant?.images} />}
        </div>
        <div className=" flex-grow w-full md:basis-[calc(50%-1.5rem)] flex flex-col text-center lg:text-start gap-y-4 p-4">
          <div className="flex gap-x-2 justify-center capitalize text-sm lg:justify-start">
            <span className="badge-error text-white px-2">{'hot'}</span>
            <span className="badge-info text-white px-2">{'in stock'}</span>
          </div>
          <h1 className="text-xl lg:text-2xl">{data.title}</h1>
          <div className="border-black flex justify-center lg:justify-start gap-x-2">
            <RateStars size={25} readOnly />
            <a className="uppercase link" href="#reviews">
              {`${data.ratingsQuantity} reviews`}
            </a>
          </div>
          <div>
            <span className="uppercase text-slate-500">Brand:</span>
            <span className="capitalize">{data.brand}</span>
          </div>
          {/* // TODO Price */}
          <h1 className="text-2xl lg:text-3xl">${'171.00'}</h1>
          <h3>
            Hurry! Only{' '}
            <span className="text-red-600">{data.variants.length}</span> left in
            Stock!
          </h3>
          <progress
            className="progress w-full"
            value={data.variants?.length * 10}
            max={100}
          ></progress>
          <hr className="my-4" />
          <div>
            <h1 className="uppercase font-thin mb-3">colors:{color}</h1>
            <SwitchColors
              colors={colors}
              onChangeColorStateHandler={setColor}
              currentColorState={color}
              circleSize={25}
              className="px-2 py-1 gap-3"
            />
          </div>
          <div>
            <h1 className="uppercase font-thin mb-3">sizes:{size?.size}</h1>
            {variant && (
              <SwitchSizes
                sizes={variant?.sizes}
                onChangeSizeStateHandler={setSize}
                currentSizeState={size}
                boxSize={10}
                className="py-2 px-1 gap-x-3"
              />
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="my-6">
        <h1
          id="reviews"
          className="text-xl font-semibold capitalize text-center md:text-start"
        >
          customer reviews
        </h1>
        <Reviews productId={id} />
      </div>
    </div>
  );
}
