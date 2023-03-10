import React, { useState, Fragment, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RateContext } from "../context/RateContext";
import CONSTS from "../CONSTS";

const SellBuy = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);

  const [btc, setBtc] = useState("");
  const [dcp, setDcp] = useState("");

  const [buy_validate, setBuyValidate] = useState(false);
  const [sell_validate, setSellValidate] = useState(false);
  const [payment_validate, setPaymentValidate] = useState(false);

  const [token, setToken] = useState("");
  const [transaction_id, setTransactionId] = useState("");
  const [collection_key, setCollectionKey] = useState("");

  const [sell_collection_key, setSellCollectionKey] = useState("");
  const [sell_btc_id, setSellBtcId] = useState("");
  const [sellStatus, setSellStatus] = useState("");
  const [buyStatus, setBuyStatus] = useState("");

  const cancelButtonRef = useRef(null);

  const handleBuy = async (e) => {
    e.preventDefault();
    if (btc === "" || dcp === "") {
      setBuyValidate(true);
      return;
    }
    let data = {
      btc_wallet_id: btc,
      dcp_wallet_id: dcp,
    };
    const res = await fetch(CONSTS.GET_TOKEN, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if(res.status!==200){
      setBuyStatus("Error occurred")
       let id = setInterval(() => {
          setBuyStatus("");
          clearInterval(id)
      }, 1000);
      return;
    }
    if(res.status===200){
      
      setBuyStatus("Successfully proceed");
      let id = setInterval(() => {
        setBuyStatus("");
        clearInterval(id)
    }, 1000);
    }
    data = await res.json();
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };
  const handleSell = async (e) => {
    e.preventDefault();
    if (sell_collection_key === "" || sell_btc_id === "") {
      setSellValidate(true);
      return;
    }
    let data = {
      collection_key: sell_collection_key,
      recipient_btc_wallet_id: sell_btc_id,
    };
    const res = await fetch(CONSTS.SELL_DCP, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setSellStatus("Successfully processed!");
      setShowSellModal(false);
      return;
    } else {
      setSellStatus("Error Occured!!");
      return;
    }
  };
  const handlePayment = async (e) => {
    if (token === "" || transaction_id === "") {
      setPaymentValidate(true);
      return;
    }
    let data = {
      token: token,
      transaction_id: transaction_id,
    };
    const res = await fetch(CONSTS.GET_COLLECTION, {
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
    <div className="w-full flex justify-between items-center">
      <button
        className="buy-sell-btn mr-1 text-white bg-[#0066ff] w-full sm:px-[40px] py-3"
        onClick={() => {
          setShowModal(true);
        }}
      >
        BUY
      </button>
      <button
        className="buy-sell-btn ml-1 sm:px-[40px] text-[#0066ff] w-full bg-transparent py-3"
        onClick={() => setShowSellModal(true)}
      >
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
                                onChange={(e) => {
                                  setBtc(e.target.value);
                                }}
                              />
                            </div>
                            <div className="flex justify-between my-2">
                              <label htmlFor="">dcp_ID:</label>
                              <input
                                type="text"
                                value={dcp}
                                placeholder="dcp_wallet_id"
                                className="border hover:border-red-200"
                                onChange={(e) => {
                                  setDcp(e.target.value);
                                }}
                              />
                            </div>
                            <div className="flex justify-center">
                              {buy_validate && (
                                <p className="text-sm text-red-500">
                                  Field must be Filled
                                </p>
                              )}
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
                            <textarea
                              rows="5"
                              cols="30"
                              placeholder="Here are token. You can enter directly"
                              value={token}
                              onChange={(e) => {
                                setToken(e.target.value);
                              }}
                              className="border hover:border-red-200 text-sm"
                            ></textarea>
                          </div>
                          <div className="flex justify-between my-2">
                            <label htmlFor="">TRANSACTION_ID:</label>
                            <input
                              type="text"
                              value={transaction_id}
                              onChange={(e) => setTransactionId(e.target.value)}
                              placeholder="transaction_id"
                              className="border hover:border-red-200"
                            />
                          </div>
                          <div className="flex justify-center">
                            {payment_validate && (
                              <p className="text-sm text-red-500">
                                Field must be Filled
                              </p>
                            )}
                          </div>
                          <div className="flex justify-center my-2 w-50">
                            <button
                              type="button"
                              className=" w-full rounded-md border border-transparent bg-blue-600 px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={handlePayment}
                            >
                              <p className="text-xl">Payment Report</p>
                            </button>
                          </div>
                          <div className="flex justify-between my-2">
                            <label htmlFor="">COLLECTION_KEY:</label>
                            {/* <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="8"
                              value={collection_key}
                              disabled
                              placeholder="Here is Collection_key"
                              className="border hover:border-red-200"
                            ></textarea> */}
                      
                          </div>
                          <div className="flex justify-center my-2">
                            <textarea
                              name=""
                              id=""
                              cols="40"
                              rows="8"
                              value={collection_key}
                              disabled
                              placeholder="Here is Collection_key"
                              className="border hover:border-red-200"
                            ></textarea>
                      
                          </div>
                        </div>
                        <div className="mt-4 text-xl">
                          <div className="flex justify-between my-2 gap-4">
                            <label htmlFor="status">status:</label> <p>{buyStatus}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6 justify-end">
                    {" "}
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        setShowModal(false);
                        setBuyValidate(false);
                      }}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={showSellModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowSellModal}
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
                          <h1>SELL DCP</h1>
                        </Dialog.Title>
                        <hr />
                        <form onSubmit={handleSell}>
                          <div className="mt-4 text-xl">
                            <div className="max-w-md px-2">
                              <p className="text-left break-words ">
                                In order to make a sale of DCP You need to first
                                make the sale from your wallet, and get a
                                collection key Make sure that the sale has been
                                received, and that the key is present in
                                overview.cash and then enter here the collection
                                key and the identification of the BTC wallet to
                                which you wish to receive the payment Please
                                note that beneficiaries should only be set for
                                the wallet ID:
                                ccd67f48-ea77-4038-9c40-2305898a7e68
                                <br />
                                <span>
                                  ('beneficiaries_sha':
                                  '4bc9fb333319bad3b65d797506b4b556420784c77ea48ec4bee1a889727638ff')
                                </span>
                                <br />
                                Minimum to transfer 1 DCP, each sale involves a
                                commission of 1 DCP + 5% of the remaining
                              </p>
                            </div>
                            <div className="flex justify-center my-2">
                              <textarea
                                cols={40}
                                rows={6}
                                type="text"
                                value={sell_collection_key}
                                placeholder="Here is Collection Key"
                                className="border hover:border-red-200"
                              />
                            </div>
                            <div className="flex justify-center my-2">
                              <input
                                value={sell_btc_id}
                                type="text"
                                placeholder="recipient_btc_wallet_id"
                                className="border hover:border-red-200"
                                onChange={(e) => {
                                  setSellBtcId(e.target.value);
                                }}
                              />
                            </div>

                            <div className="flex justify-center">
                              {sell_validate && (
                                <p className="text-sm text-red-500">
                                  Field must be Filled
                                </p>
                              )}
                            </div>
                            <div className="mt-4 text-xl">
                          <div className="flex justify-between my-2 gap-4">
                            <label htmlFor="status">status:</label> <p>{sellStatus}</p>
                          </div>
                        </div>
                            <div className="flex justify-end my-2 w-50">
                              <button
                                type="submit"
                                className=" w-full rounded-md border border-transparent bg-blue-600 px-10 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                              >
                                <p className="text-xl">Make the sale</p>
                              </button>

                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                  setShowSellModal(false);
                                  setSellValidate(false);
                                }}
                                ref={cancelButtonRef}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </form>
                       
                      </div>
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

export default SellBuy;
