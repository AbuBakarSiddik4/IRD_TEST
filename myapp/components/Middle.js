import React from "react";
import Topbar from "./Topbar";
import { getCategory } from "@/lib/getCategory";
import CategoryBox from "./CategoryBox";

export default async function Middle() {
  const categorys = await getCategory();
  return (
    <main>
      <Topbar />
      <CategoryBox categorys={categorys}/>
    </main>
  );
}
