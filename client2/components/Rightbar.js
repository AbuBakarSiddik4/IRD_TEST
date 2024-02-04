import React from "react";
import Language from "@/public/language.svg";
import AllDuas from "@/public/All Duas.svg";
import Generale from "@/public/generale.svg";
import Image from "next/image";
import Profile from "@/public/profile.svg";
import Setting from "@/public/setting.svg";


export default function Rightbar() {
  return (
    <main className="m-2 ">
      <div className="flex justify-end mr-5">
        <Image src={Setting} alt="Search Icon" className="mr-2 xl:hidden"/>
        <Image src={Profile} alt="Search Icon" className="cursor-pointer hidden sm:block h-auto" />
      </div>

      <div className="mt-16 mx-8 px-4 flex flex-col gap-6 hidden xl:block bg-white h-[38rem] rounded-lg shadow-md	">
        <div className="text-center text-xl font-bold">Settings</div>

        <div>
          <div className="sideBtn setting-btn">
            <div>
              <Image src={Language} alt="Language Icon" />
            </div>
            <div className="ml-5">Language Settings</div>
          </div>
          <div className="sideBtn setting-btn mt-2">
            <div>
              <Image src={Generale} alt="Generale Icon" className="sideBtn" />
            </div>
            <div className="ml-5">Generale Settings</div>
          </div>
          <div className="sideBtn setting-btn mt-2">
            <div>
              <Image src={AllDuas} alt="Font Icon" className="sideBtn" />
            </div>
            <div className="ml-5">Font Settings</div>
          </div>
          <div className="sideBtn setting-btn mt-2">
            <div>
              <Image src={AllDuas} alt="Font Icon" className="sideBtn" />
            </div>
            <div className="ml-5">Appearance Settings</div>
          </div>
        </div>
      </div>
    </main>
  );
}
