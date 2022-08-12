import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCheckoutSessionMutation } from '../../services/checkoutApi';
import { cityData } from '../address/citys';

export default function CartTotal() {
  const [zip, setZip] = useState('');
  const [calc, setCalc] = useState(false);
  const [getCheckout, result] = useGetCheckoutSessionMutation();
  const [cartTotal, setCartTotal] = useState({
    country: 'Egypt',
    city: 'Mansoura',
    zipCode: '357234',
    instructions: '',
    total: 0,
  });
  const handleCalcShipping = () => {
    setCalc(true);
  };
  const handleCity = (event) => {
    setCartTotal({
      ...cartTotal,
      city: event.target.value,
    });
  };
  const handleZipCode = (event) => {
    setZip(event.target.value);
    setCartTotal({
      ...cartTotal,
      zipCode: event.target.value,
    });
  };
  const handleOrderInstruction = (event) => {
    setCartTotal({
      ...cartTotal,
      instructions: event.target.value,
    });
  };
  const handleStripe = async () => {
    await getCheckout();
  };

  if (result?.data?.url) window.location.href = result?.data?.url;

  return (
    <div className="p-5 text-neutral border border-slate-300 my-8 drop-shadow-md rounded">
      <h1 className="text-lg my-3">CART TOTAL</h1>
      <p className="text-xm my-3">Estimate Shipping and TAX</p>
      <p className="text-sm font-light my-3">
        Enter your destination to get a shipping estimate.
      </p>
      <div className="mb-6">
        <label className="block mb-6">
          COUNTERY*
          <input
            className=" border border-slate-300 outline-none text-sm text-nuteral-800  focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
            placeholder="Egypt"
            type="text"
            name="name"
            disabled
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block mb-6">
          CITY
          <select
            name="cityName"
            onChange={handleCity}
            defaultValue="mansoura"
            className=" border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
          >
            {cityData.results.map((city, index) => {
              return (
                <option value={city.name} key={index}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="mb-6">
        <label className="block mb-6">
          ZIP/POSTAL CODE
          <input
            className=" border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
            placeholder=""
            type="text"
            name="ZIP"
            onChange={handleZipCode}
          />
        </label>
      </div>
      <div className="my-3">
        <Link to="#" className="underline " onClick={handleCalcShipping}>
          CALCULATE SHIPPING
        </Link>
      </div>
      {!zip && calc && (
        <p className="my-3 text-sm font-light">Error : zip Enter a ZIP code.</p>
      )}
      <hr className="my-5" />
      <p className="my-3">Special Instructions For Seller</p>
      <p className="my-3 text-xm font-light">
        Add special instructions for your order...
      </p>
      <textarea
        onChange={handleOrderInstruction}
        className="max-h-[6rem] border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
      ></textarea>
      <hr className="my-5" />

      <h2 className="mt-4">TOTAL</h2>
      <p className="my-2">{`$${'1,269.00'}`}</p>
      <p className="text-sm font-light mt-2 mb-5">
        Shipping calculated at checkout
      </p>
      <button
        onClick={handleStripe}
        className="w-full py-2 border hover:border-neutral bg-neutral hover:bg-white hover:text-neutral text-center text-sm text-white  duration-300  "
      >
        PROCCED TO CHECKOUT
      </button>
    </div>
  );
}
