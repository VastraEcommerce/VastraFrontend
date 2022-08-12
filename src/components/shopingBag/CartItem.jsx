import React, { useState } from 'react';

import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { calcToTalPrice } from '../../app/features/cartSlice';
import {
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} from '../../services/cartItemsApi';

export default function CartItem({ product }) {
  const [removeCartItem] = useRemoveCartItemMutation();
  const [updateCartItem] = useUpdateCartItemMutation();
  const [quntity, setQuntity] = useState(product.quantity);
  const total = product.price * quntity;
  const dispatch = useDispatch();
  const handleBlur = async () => {
    await updateCartItem({ id: product._id, quantity: quntity });
    console.log(quntity);
    dispatch(calcToTalPrice(total));
  };
  const handleChange = (event) => {
    setQuntity(event.target.value);
  };
  const handelDeleteProduct = async (event) => {
    await removeCartItem(product._id);
  };

  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3 ">
          <button onClick={handelDeleteProduct}>
            {' '}
            <RiDeleteBinLine className={'text-nuetral '} />
          </button>

          <div className="sm:flex items-center space-x-3">
            <div className="min-w-[4rem] max-w-[12rem] hover:cursor-pointer">
              <img
                src={`${process.env.REACT_APP_BASE_URL}${product.image}`}
                alt="Product Pic"
                className="w-full "
                onClick={() => navigate(`/products/${product.productId}`)}
              />
            </div>
            <div className="text-neutral">{product.brand}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xm md:text-sm">{product.size}</p>
      </td>
      <td>
        <p className="text-xm md:text-sm">${product.price}</p>
      </td>
      <td>
        {' '}
        <input
          type="number"
          min="1"
          max="100"
          defaultValue={quntity}
          className="px-5 border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   "
          name="quntity"
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </td>
      <td>
        <p className="text-xm md:text-sm">{`$${total}`}</p>
      </td>
    </tr>
  );
}
