import React, { useContext, useEffect, useState } from "react";
import cn from 'classname';
import { TrendContext } from "../context/TrendContext";
{/* <br className="xl:flex hidden" /> */}
const Trand = () => {
  const context = useContext(TrendContext)
  const changeTrend = () =>{
    
    context.changeTrend();
  }
  useEffect(()=>{
    context.changeTrend();
    const invervalId = setInterval(changeTrend,60000);
    return () => clearInterval(invervalId);
  },[])
  return (
    <div className="mb-8 mt-2">
      <div className="w-full max-w-[351px]  min-w-[271px] mb-2">
        <h3 className={cn("text-[32px] leading-[1.2] font-extrabold", context.trend.hourTrend>1?"text-[#4EA722]":"text-[#EF1C24]")}>
          TREND HOUR :   {context.trend.hourTrend}
        </h3>
      </div>
      <div className="w-full max-w-[351px] min-w-[271px] mb-2">
        <h3 className={cn("text-[32px] leading-[1.2] font-extrabold", context.trend.dayTrend>1?"text-[#4EA722]":"text-[#EF1C24]")}>
          DAILY : {context.trend.dayTrend}
        </h3>
      </div>
      <div className="w-full max-w-[351px] min-w-[271px] mb-2">
        <h3 className={cn("text-[32px] leading-[1.2] font-extrabold", context.trend.weekTrend>1?"text-[#4EA722]":"text-[#EF1C24]")}>
          WEEKLY TREND : {context.trend.weekTrend}
        </h3>
      </div>
    </div>
  );
};

export default Trand;
