"use client";
import { getSubcategory } from "@/lib/getSubcategory"
import { useEffect, useState } from "react";

export default function SubcategoryBox({categoryID}) {
    const [subCategorys, setSubCategorys] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getSubcategory(categoryID);
            setSubCategorys(result);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [categoryID]);
  return (
    <div>
        {subCategorys &&  subCategorys.map((subs)=>(
            <div key={subs.id}>
                <div className="overflow-hidden ml-9 mr-4 text-nowrap p-1 text-sm italic hover:bg-gray-100 rounded-sm cursor-pointer">
                {subs.subcat_name_en}
                </div>
            </div>
        ))}
    </div>
  )
}
