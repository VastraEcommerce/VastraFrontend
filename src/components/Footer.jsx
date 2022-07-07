import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import {
  BsFillTelephoneOutboundFill,
  BsEnvelopeFill,
  BsGithub,
  BsPaypal,
} from "react-icons/bs";
import { SiVisa } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className=" px-10 py-8 bg-base-200 text-base-content flex items-center justify-evenly flex-col sm:flex-row sm:justify-around sm:items-start md:items-center ">
        <div className="flex flex-col items-center justify-evenly md:flex-row md:gap-20 ">
          <div className="flex flex-col items-center">
            <Logo />
            <p>
              Online Shopping For Clothes
              <br />
              We Care About You
            </p>
          </div>
          <div className="flex flex-col items-center justify-evenly mt-4">
            <span className="footer-title">Categories</span>
            <Link className="link link-hover" to="#">
              Men
            </Link>
            <Link className="link link-hover" to="#">
              Women
            </Link>
            <Link className="link link-hover" to="#">
              kids
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly mt-4 sm:mt-0 lg:flex-row lg:w-6/12">
          <div className="flex flex-col items-center mt-4">
            <span className="footer-title">Pages</span>
            <Link className="link link-hover" to="#">
              Home
            </Link>
            <Link className="link link-hover" to="#">
              About us
            </Link>
            <Link className="link link-hover" to="#">
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-center mt-4">
            <span className="footer-title" to="#">
              Customer Services
            </span>
            <span className="flex items-center">
              <BsFillTelephoneOutboundFill className="mr-2" />
              Call Us: 01008611233
            </span>
            <span className="flex items-center">
              <BsEnvelopeFill className="mr-2" />
              <a
                className="hover:underline decoration-1"
                href="mailto:Vastra@gmail.com"
              >
                Vastra@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center mt-4">
            <span className="footer-title" to="#">
              Follow Us
            </span>
            <span className="flex items-center">
              <BsGithub className="mr-2" />
              <Link
                className="hover:underline decoration-1"
                to="https://github.com/VastraEcommerce"
              >
                GitHub
              </Link>
            </span>
          </div>
        </div>
      </footer>
      <hr />
      <div className=" bg-base-200 flex justify-center items-center py-5 ">
        <SiVisa size={40} />
        <BsPaypal className="ml-10" />
      </div>
    </>
  );
};

export default Footer;
