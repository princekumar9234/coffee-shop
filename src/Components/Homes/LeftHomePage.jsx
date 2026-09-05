import React from "react";

const LeftHomePage = () => {
  return (
    <div className="w-1/2 ml-17 flex flex-col justify-start items-start">
      <div >
        <div className="font-bold  mb-0 text-5xl mt-20  ">
          <h1 className="text-white px-6">
            Beyond <span className="text-orange-500"> Coffee</span>
          </h1>
        </div>
        <div>
          <p className="text-yellow-700 px-6 font-medium text-2xl py-2">Make Your day great with our special premium crafts!</p>
        </div>
        <p className="text-0xl py-2 px-6 text-gray-300">
          Welcome to our coffee paradise, where every bean tells a story and
          every cup sparks joy. Experience the perfect blend of  tradition  and
          modern brewing.
        </p>
      </div>
      <div className="m-10 mt-2 p-4 text-amber-100 flex gap-8">
        <button className=" font-bold bg-orange-600 p-4 rounded-full cursor-pointer"> Order Now </button>
        <button className=" font-bold border-2 p-4 rounded-full cursor-pointer"> Contact us </button>
      </div>
    </div>
  );
};

export default LeftHomePage;
