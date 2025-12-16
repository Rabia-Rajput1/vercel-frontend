import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
        <h2 className="cursor-pointer font-light text-2xl uppercase pb-1 text-gray-700">
          Denta <span className="font-semibold text-[#20AFC0]">Care</span>
        </h2>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </p>
        </div>
        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+92300-1234567</li>
            <li>dentacare@example.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2026@ DentaCare - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
