import React, { useState } from "react";
import cn from 'classname';

const Trand = () => {
  const [up, setUp] = useState(false);
  return (
    <div className="mb-8">
      <div className="w-full max-w-[351px]  min-w-[271px]">
        <h3 className={cn("text-[32px] leading-[1.2] font-extrabold", up?"text-[#4EA722]":"text-[#EF1C24]")}>
          TREND HOUR : + <br className="xl:flex hidden" /> 1.2
        </h3>
      </div>
      <div className="w-full max-w-[351px] min-w-[271px]">
        <h3 className="text-[32px] leading-[1.2] xl:my-8 my-3 font-extrabold text-[#EF1C24]">
          DAILY <br className="xl:flex hidden" /> TREND : 4.3
        </h3>
      </div>
      <div className="w-full max-w-[351px] min-w-[271px]">
        <h3 className="text-[32px] leading-[1.2] font-extrabold text-[#4EA722]">
          WEEKLY TREND : + <br className="xl:flex hidden" /> 11.8
        </h3>
      </div>
    </div>
  );
};

export default Trand;
