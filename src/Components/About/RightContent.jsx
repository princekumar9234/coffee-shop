import React from "react";
import 'remixicon/fonts/remixicon.css'

const RightContent = () => {
  return (
    <div className="md:w-1/2 flex flex-col px-4 py-6 md:p-14 md:mt-10">
      <div className="text-4xl font-bold">
        <h1>Established in <span className="text-yellow-600">Quality </span> </h1>
      </div> 
      <p className="text-yellow-700 py-2">OUR STORY</p>
      <div className="flex flex-col gap-4 ">
      <p className="flex gap-4 text-sm font-sans">
          At Coffee House, we pride ourselves on being a go-to destination for
          coffee lovers. We're dedicated to providing an exceptional coffee
          experience in a cozy and inviting atmosphere.
        </p>
        <p className=" leading-tigh text-sm font-sans"> 
          Located in the heart of Sadipur, Dihri, we offer a place where guests
          can relax, unwind, and enjoy their time in absolute comfort with the
          finest beans sourced ethically.
        </p>
      </div>
      <div className="flex gap-4 mt-4">
      <p className="px-3 py-2 text-2xl cursor-pointer rounded-full active:scale-100 hover:bg-amber-700 active:text-white font-bold bg-white"> <i class="ri-facebook-line"></i></p>   
        <p className="px-3 py-2 text-2xl active:scale-100 hover:bg-amber-700 active:text-white rounded-full font-bold bg-white"><i class="ri-instagram-line"></i></p>
        <p className="px-3 py-2 text-2xl active:scale-100 hover:bg-amber-700 active:text-white rounded-full font-bold bg-white"><i class="ri-twitter-x-line"></i></p>
      </div>
    </div>
  );
};

export default RightContent;
