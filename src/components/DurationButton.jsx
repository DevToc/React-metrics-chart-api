import React, {useState} from "react";

const DurationButton = ({sendRangeToGraph}) => {

  return (
    <div className="flex max-w-[559px] flex-wrap my-6 xl:my-0 mx-auto w-full items-center justify-between ">
      <button className=" btn-style px-6 py-1" onClick={()=>{sendRangeToGraph("all")}}>ALL</button>
      <button className="sm:mx-8 mx-2 btn-style px-6 py-1" onClick={()=>{sendRangeToGraph("30d")}}>30 DAYS</button>
      <button className=" btn-style px-6 py-1" onClick={()=>{sendRangeToGraph("24h")}}>24 HOURS</button>
    </div>
  );
};

export default DurationButton;
