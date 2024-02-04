"use client";

import { getDuas } from "@/lib/getDuas";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Copy from "@/public/copy.svg";
import BookMark from "@/public/savedua.svg";
import Bulb from "@/public/bulb.svg";
import Share from "@/public/share.svg";
import Report from "@/public/report.svg";

export default function DuaBox({ categoryID }) {
  const [duas, setDuas] = useState([]);
  useEffect(() => {
    setDuas([]);
    const fetchData = async () => {
      try {
        const result = await getDuas(categoryID);
        setDuas(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [categoryID]);
  return (
    <div className="">
      {duas &&
        duas.map((dua) => (
          <div
            key={dua.id}
            className="border border-gray-200 m-3 bg-white p-3 rounded-md shadow-md text-xs"
          >
            <div className="text-primary font-semibold mb-5">
              {dua.id}. {dua.dua_name_en}
            </div>
            <div className="mb-8">{dua.top_en}</div>
            <div className="mb-7">{dua.dua_arabic}</div>
            {dua.transliteration_en && (
              <div className="mb-7">
                <span className="text-xs italic font-semibold text-gray-500">
                  Transliteration:
                </span>
                <span className=" text-gray-600 italic font-semibold text-xs">
                  {dua.transliteration_en}
                </span>
              </div>
            )}
            {dua.translation_en && (
              <div className="mb-7">
                <span className="text-xs italic font-semibold text-gray-500">
                  Translation:
                </span>
                <span className=" text-gray-500 font-semibold text-xs">
                  {dua.translation_en}
                </span>
              </div>
            )}
            <div className="mb-7">{dua.bottom_en}</div>
            <div className="mb-4">
              <div className="text-primary text-xs">Reference:</div>
              <div>{dua.refference_en}</div>
            </div>

            <div className="flex gap-2 justify-end">
              <div className="cursor-pointer">
                <Image style={{ filter: 'invert(10%) sepia(100%) saturate(10000%) hue-rotate(180deg)' }} src={Copy} alt="copy icon" />
              </div>
              <div className="cursor-pointer">
                <Image style={{ filter: 'invert(10%) sepia(100%) saturate(10000%) hue-rotate(180deg)' }} src={BookMark} alt="Save icon" />
              </div >
              <div className="cursor-pointer">
                <Image style={{ filter: 'invert(10%) sepia(100%) saturate(10000%) hue-rotate(180deg)' }} src={Bulb} alt="Memorize icon" />
              </div>
              <div className="cursor-pointer">
                <Image style={{ filter: 'invert(10%) sepia(100%) saturate(10000%) hue-rotate(180deg)' }} src={Share} alt="Share icon" />
              </div>
              <div className="cursor-pointer">
                <Image style={{ filter: 'invert(10%) sepia(100%) saturate(10000%) hue-rotate(180deg)' }} src={Report} alt="Report icon"/>
                {/* style={{ filter: 'grayscale(400%)' }} */}
              </div>
            </div>

          </div>
        ))}
    </div>
  );
}
