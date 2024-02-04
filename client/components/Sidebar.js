import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Home from "@/public/Home.svg";
import AllDua from "@/public/All Duas.svg";
import Memorize from "@/public/Memorize.svg";
import Bookmark from "@/public/Bookmark.svg";
import Ruqyah from "@/public/Ruqyah.svg";
import Dua from "@/public/Dua Q&A.svg";
import Book from "@/public/Book.svg";
import Support from "@/public/I want to support.svg";

export default function Sidebar() {
  return (
    <div className="my-5 mr-6 ml-3 bg-white shadow-md rounded-3xl hidden h-[44rem] md:block min-w-[8vw]">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="mb-10 sideBtn ">
          <Image src={Logo} alt="Logo Btn" className="w-auto" />
        </div>
        <div className="sideBtn">
          <Image src={Home} alt="Home Btn" />
        </div>
        <div className="sideBtn">
          <Image src={AllDua} alt="All Dua Menu Btn" />
        </div>
        <div className="sideBtn">
          <Image src={Memorize} alt="Memorize tab Btn" />
        </div>
        <div className="sideBtn">
          <Image src={Bookmark} alt="Bookmark btn" />
        </div>
        <div className="sideBtn">
          <Image src={Ruqyah} alt="Ruqyah btn" />
        </div>
        <div className="sideBtn">
          <Image src={Dua} alt="Dua nav btn" />
        </div>
        <div className="sideBtn">
          <Image src={Book} alt="All book btn" />
        </div>
        <div className="mt-5 sideBtn">
          <Image src={Support} alt="Support Btn" />
        </div>
      </div>
    </div>
  );
}
