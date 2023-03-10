import React, { useState, Fragment, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RateContext } from "../context/RateContext";
import CONSTS from "../CONSTS";

const Converter = () => {
  const context = useContext(RateContext);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showPrevModal, setShowPrevModal] = useState(false);
  const cancelButtonRef = useRef(null);

  const [transaction_id, setTransactionId] = useState("");

  const [collection_key, setCollectionKey] = useState("");

  const handleConvert = (e) => {
    setTotal(context.rate.bitcoin * count);
  };
  const handleCheck = async (e) => {
    let data = {
      transaction_id: transaction_id,
    };
    const res = await fetch(CONSTS.GET_PAYMENT_DATA, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.status === 500) {
      alert("Internal server error");
    }
    if (res.status === 411) {
      alert("invalid token");
    }
    data = await res.json();
    setCollectionKey(data.collection_key);
  };

  return (
    <div className="flex flex-col mt-4 ">
      <button
        className="w-full py-3 converter-transaction-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        CONVERTER
      </button>
      <button
        className="mt-4 py-3 converter-transaction-btn"
        onClick={() => setShowPrevModal(true)}
      >
        CHECK PREVIOUS TRANSACTION
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
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h1"
                          className="text-lg text-4xl leading-6 text-gray-900 my-4"
                        >
                          <h1>Convert(btc->dcp)</h1>
                        </Dialog.Title>
                        <hr />
                        <div className="mt-4 text-xl">
                          <div className="flex justify-between my-2 gap-1">
                            <input
                              type="number"
                              className="border hover:border-red-200"
                              value={count}
                              onChange={(e) => setCount(e.target.value)}
                            />
                            <input
                              type="number"
                              className="border hover:border-red-200"
                              value={total}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleConvert}
                    >
                      Convert
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShowModal(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            ``
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={showPrevModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowPrevModal}
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
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h1"
                          className="text-lg text-4xl leading-6 text-gray-900 my-4"
                        >
                          <h1>Previous Transaction</h1>
                        </Dialog.Title>
                        <hr />
                        <div className="mt-4 text-xl">
                          <div className="flex justify-between my-2 gap-4">
                            <label htmlFor="">TRANSACTION_ID:</label>
                            <input
                              type="text"
                              className="border hover:border-red-200"
                              placeholder="Here is transaction_id"
                              value={transaction_id}
                              onChange={(e) => setTransactionId(e.target.value)}
                            />
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex justify-center sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={handleCheck}
                            >
                              Check
                            </button>
                          </div>
                          <div className="flex justify-between my-2">
                            <label htmlFor="">COLLECTION_KEY:</label>
                          </div>

                          <div className="flex justify-center my-2">
                            <textarea
                              rows={8}
                              cols={40}
                              value={collection_key}
                              placeholder="Here is Collection_key"
                              className="border hover:border-red-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowPrevModal(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Converter;
