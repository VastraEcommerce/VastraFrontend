import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function OrderDetails() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.order.order);
  console.log(cartItems);
  return (
    <div className="py-8 sm:px-5 w-[100%]">
      <table className="table text-neutral table-normal w-[100%] text-center">
        <thead>
          <tr>
            <td className="text-sm font-normal">PRODUCT</td>
            <td className="text-sm font-normal">BRAND</td>
            <td className="text-sm font-normal">PRODUCT SIZE</td>
            <td className="text-sm font-normal">PRICE</td>
            <td className="text-sm font-normal">QUANTITY</td>
            <td className="text-sm font-normal">TOTAL</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <tr key={product._id}>
              <td>
                <div className="flex items-center space-x-3 ">
                  <div className="sm:flex items-center space-x-3">
                    <div className="min-w-[4rem] max-w-[12rem] hover:cursor-pointer">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}${product.image}`}
                        alt="Product Pic"
                        className="w-full "
                        onClick={() => navigate(`/products/${product._id}`)}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-neutral">{product.brand}</div>
              </td>
              <td>
                <p className="text-xm md:text-sm">{product.size}</p>
              </td>
              <td>
                <p className="text-xm md:text-sm">${product.price}</p>
              </td>
              <td>
                <p className="text-xm md:text-sm">{product.quantity}</p>
              </td>

              <td>
                <p className="text-xm md:text-sm">{`$${
                  +product.price * +product.quantity
                }`}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
