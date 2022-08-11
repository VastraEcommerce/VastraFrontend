import React, { useState } from "react";
// import productImage from "../../images/women.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../app/features/cartSlice";
export default function Product({ product }) {
  const dispatch = useDispatch();
  const [quntity, setQuntity] = useState("1");
  const handleValue = (event) => {
    setQuntity(event.target.value);
  };
  const handelDeleteProduct = (event) => {
    dispatch(deleteProduct(product));
    console.log(event.target);
  };
  const total = product.price * quntity;
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <div className='flex items-center space-x-3 '>
          <button onClick={handelDeleteProduct}>
            {" "}
            <RiDeleteBinLine className={"text-nuetral "} />
          </button>

          <div className='sm:flex items-center space-x-3'>
            <div className='min-w-[4rem] max-w-[12rem] hover:cursor-pointer'>
              <img
                src={`${process.env.REACT_APP_BASE_URL}${product.image}`}
                alt='Product Pic'
                className='w-full '
                onClick={() => navigate(`/products/${product.productId}`)}
              />
            </div>
            <div className='text-neutral'>{product.brand}</div>
          </div>
        </div>
      </td>
      <td>
        <p className='text-xm md:text-sm'>${product.price}</p>
      </td>
      <td>
        {" "}
        <input
          type='number'
          min='1'
          max='100'
          className='px-5 border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
          placeholder='1'
          name='quntity'
          onChange={handleValue}
        />
      </td>
      <td>
        <p className='text-xm md:text-sm'>{`$${total}`}</p>
      </td>
    </tr>
  );
}
