import React, { useState, Fragment, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RateContext } from "../context/RateContext";

const SellBuy = () => {
  const [showModal, setShowModal] = useState(false);


  const [btc, setBtc] = useState("");
  const [dpc, setDpc] = useState("")
  const [isEmpty, setEmpty] = useState(false);
  const cancelButtonRef = useRef(null);

  const handleBuy = (e) =>{
    e.preventDefault();
    if(btc==="" || dpc === ""){
      setEmpty(true);
      return;
    }
  }

  return (
    <div className="w-full flex justify-between items-center">
      <button
        className="buy-sell-btn mr-1 text-white bg-[#0066ff] w-full sm:px-[40px] py-3"
        onClick={() => {
          setShowModal(true);
        }}
      >
        BUY
      </button>
      <button className="buy-sell-btn ml-1 sm:px-[40px] text-[#0066ff] w-full bg-transparent py-3">
        SELL
      </button>

      <Transition.Root show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex justify-center">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h1"
                          className="text-lg text-4xl leading-6 text-gray-900 my-4"
                        >
                          <h1>Buy DCP</h1>
                        </Dialog.Title>
                        <hr />
                       <form onSubmit={handleBuy}>
                         <div className="mt-4 text-xl">
                          <div className="flex justify-between my-2 gap-4">
                            <label htmlFor="">BTC_ID:</label>
                            <input
                            value={btc}
                              type="text"
                              placeholder="bitcoin_wallet_id"
                              className="border hover:border-red-200"
                              onChange={(e)=>{setBtc(e.target.value)}}
                            />
                          </div>
                          <div className="flex justify-between my-2">
                            <label htmlFor="">DPC_ID:</label>
                            <input
                              type="text"
                              value={dpc}
                              placeholder="dpc_wallet_id"
                              className="border hover:border-red-200"
                              onChange={(e)=>{setDpc(e.target.value)}}
                            />
                          </div>
                          <div className="flex justify-center">
                            {isEmpty&&(<p className="text-sm text-red-500">Field must be Filled</p>)}
                          </div>
                          <div className="flex justify-center my-2 w-50">
                            <button
                              type="submit"
                              className=" w-full rounded-md border border-transparent bg-blue-600 px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            
                            >
                              <p className="text-xl">Buy</p>
                            </button>
                          </div>
                        </div>
                       </form>
                        <div className="mt-4 text-xl">
                          <div className="flex justify-between my-2 gap-4">
                            <label htmlFor="">Token:</label>
                            <input
                              type="textarea"
                              placeholder="Here are token. You can enter directly"
                              className="border hover:border-red-200"
                            />
                          </div>
                          <div className="flex justify-between my-2">
                            <label htmlFor="">TRANSACTION_ID:</label>
                            <input
                              type="text"
                              placeholder="transaction_id"
                              className="border hover:border-red-200"
                            />
                          </div>
                          <div className="flex justify-center my-2 w-50">
                            <button
                              type="button"
                              className=" w-full rounded-md border border-transparent bg-blue-600 px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              <p className="text-xl">Payment Report</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6"></div>

                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {setShowModal(false);
                    setEmpty(false)}}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SellBuy;
