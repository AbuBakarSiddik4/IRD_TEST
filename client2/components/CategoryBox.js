"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CategoryIcon from "@/public/category-icon.svg";
import SubcategoryBox from "./SubcategoryBox";
import Magnify from "@/public/magnifiging.svg";
import DuaBox from "./DuaBox";

export default function CategoryBox({ categorys }) {
  const [currentCategory, setCurrentCategory] = useState("1");



  return (
    <div className="ml-4 w-[97vw]  md:w-[85vw] lg:w-[80vw] xl:w-full grid grid-cols-7 ">
      <div className=" col-span-2 m-1">
        <div className="text-center text-white bg-primary p-2 rounded-t-md ">
          Category
        </div>
        <div className="bg-white min-h-[40rem] rounded-b-md">
          <div className="px-2 overflow-hidden">
            <div className="mt-3 flex border-2 border-gray-200 shadow-md">
              <Image src={Magnify} alt="Search Icon" className="" />
              <input
                type="search"
                placeholder="Search Category"
                className="p-3"
              />
            </div>
          </div>
          <div className=" mt-5">
            <div className="max-h-[30rem] overflow-y-scroll">
              {categorys.map((category) => (
                <div
                  key={category.id}
                 
                >
                  <div onClick={() => setCurrentCategory(category.id)}>
                    <div
                      className={`mt-3 rounded-md hover:bg-gray-200 mx-3 flex items-cente justify-between p-2 cursor-pointer
          ${currentCategory === category.id ? "bg-gray-200" : ""}
          `}
                    >
                      <div className="">
                        <Image src={CategoryIcon} alt="Category Icon" />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="ml-2">
                          <h3 className="font-semibold">
                            {" "}
                            {category.cat_name_en}{" "}
                          </h3>
                          <i className="text-sm">
                            Subcategory: {category.no_of_subcat}
                          </i>
                        </div>
                        <div>
                          <div>{category.no_of_dua}</div>
                          <div>Duas</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        category.id === currentCategory ? "block" : "hidden"
                      }`}
                    >
                      <SubcategoryBox categoryID={category.cat_id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 max-h-[50rem] overflow-y-scroll ">
        {currentCategory ?  <DuaBox categoryID={currentCategory} /> : <>Please Select One Category.</>}
      </div>
    </div>
  );
}
