import React from "react";
import ProductCardV1 from "../ui/product-card/ProductCardV1";

const ProudctofDay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h3 className="text-xl font-bold">Check out products of the day</h3>
      <p className="text-xs text-gray-500">
        Admin panel allows you to add, delete, edit subtitles
      </p>
      <ProductCardV1 />
    </div>
  );
};

export default ProudctofDay;
