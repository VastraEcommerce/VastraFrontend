import React from "react";
import { BiError, BiArrowBack } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='p-6 md:p-24 text-neutral mx-auto'>
      <div className='flex justfiy-center '>
        <div>
          <p className='text-9xl font-bold my-5'>
            {" "}
            <BiError />
          </p>
        </div>
        <div>
          <p className='text-6xl font-bold my-5'>404</p>
          <p className='text-3xl font-bold my-5'> NOT FOUND</p>
        </div>
      </div>
      <p className='pl-2 w-[20rem] text-lg my-5'>
        Looks Like you've followed a broken link or entered a URL that doesn't
        exist on this site.{" "}
      </p>
      <div>
        {/* <p className='my-3 text-red-400'> ARE YOU LOST BABY GIRL!</p> */}
        <p className='pl-2 my-3 text-red-400'>
          Connect Vastra support team...{" "}
          <Link to='/contact' className='underline text-blue-400'>
            {" "}
            HERE
          </Link>
        </p>
        <button
          className='pl-2 flex  items-center underline'
          onClick={() => {
            navigate("/");
          }}>
          <p className='mr-1'>
            <BiArrowBack />
          </p>
          <p>Back to our site </p>
        </button>
      </div>
    </div>
  );
}
