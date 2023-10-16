import React from "react";
import FooterMiddleList from "./FooterMiddleList";
import { middleList } from "../../constants";
import { logo, bdFlag } from "../../assets";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* ======== Top Sart here  ======== */}
      <div className="w-full border-b-[1px] border-gray-500 p-10">
        <div className="max-w-5xl mx-auto text-gray-300 ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:place-items-center md:items-start">
            {middleList.map((item) => {
              return (
                <FooterMiddleList
                  key={item._id}
                  title={item.title}
                  listItem={item.listItem}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* ======== Top End here ======== */}
      {/* ======== Bottom Sart here  ======== */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="" />
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <img className="w-6" src={bdFlag} alt="" />
          <p>Bangladesh</p>
        </div>
      </div>
      {/* ======== Bottom End here ======== */}
    </div>
  );
};

export default FooterMiddle;
