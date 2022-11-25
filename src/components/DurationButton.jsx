import React from "react";

const DurationButton = () => {
  return (
    <div className="flex max-w-[559px] flex-wrap my-6 xl:my-0 mx-auto w-full items-center justify-between ">
      <button className=" btn-style px-6 py-1">ALL</button>
      <button className="sm:mx-8 mx-2 btn-style px-6 py-1">30 DAYS</button>
      <button className=" btn-style px-6 py-1">24 HOURS</button>
    </div>
  );
};

export default DurationButton;
