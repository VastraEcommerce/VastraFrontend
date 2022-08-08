import React from "react";
import DeletePic from "../../images/Delete2.png";
import productImage from "../../images/women.png";
export default function Product() {
  return (
    <tr>
      <td>
        <div className='flex items-center space-x-3'>
          <img src={DeletePic} alt='delete' className='w-[1rem] ' />
          <img
            src={productImage}
            alt='Product Pic'
            className='md:w-[14rem] sm:w-[6rem]'
          />
          <div className='text-neutral'>Belted trousers</div>
        </div>
      </td>
      <td>
        <p className='text-sm lg:text-xl'>$16</p>
      </td>
      <td>
        {" "}
        <input
          min='1'
          max='100'
          className='w-[2rem] border border-slate-300 outline-none text-sm text-nuteral-800 hover:bg-white focus:bg-white shadow-sm   w-full p-2.5  bg-base-200  dark:placeholder-gray-400   '
          placeholder=''
          type='number'
          name='quntity'
          //   value={1}
        />
      </td>
      <td>
        <p className='text-sm lg:text-xl'>$16</p>
      </td>
    </tr>
  );
}
