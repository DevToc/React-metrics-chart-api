import React from "react";

const SellBuy = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <button className="buy-sell-btn mr-1 text-white bg-[#0066ff] w-full sm:px-[40px] py-3">
        BUY
      </button>
      <button className="buy-sell-btn ml-1 sm:px-[40px] text-[#0066ff] w-full bg-transparent py-3">
        SELL
      </button>
    </div>
  );
};

export default SellBuy;
