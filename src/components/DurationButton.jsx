import React, {useState} from "react";
// import CONSTS from "../CONSTS";

const DurationButton = ({sendRangeToGraph}) => {
  // const [Values,setValues]=useState()
  // const setSpinner=()=>{
  // }
  // const getMetricsAll=async()=>{
  //   setSpinner()
  //   const response = await fetch(CONSTS.GET_ALL_METRICS_PASS);
  //   const myJson = await response.json();
  //   const values_list=convertDataToGraphFormat(myJson)
  //   console.log('========got the data===========');
  //   // sendDataToGraph(values_list)
  //   // setValues(values_list)
  //   // console.log(values_list);
  // }


  // const convertDataToGraphFormat=(jsonData)=>{
  //   let values_list=[]
  //   for (const key in jsonData) {
  //   values_list.push({"date":key,"value":parseFloat(jsonData[key].toFixed(4))})
  //   }
  //   return values_list

  // }
  return (
    <div className="flex max-w-[559px] flex-wrap my-6 xl:my-0 mx-auto w-full items-center justify-between ">
      <button className=" btn-style px-6 py-1" onClick={()=>{sendRangeToGraph("all")}}>ALL</button>
      <button className="sm:mx-8 mx-2 btn-style px-6 py-1" onClick={()=>{sendRangeToGraph("30d")}}>30 DAYS</button>
      <button className=" btn-style px-6 py-1">24 HOURS</button>
    </div>
  );
};

export default DurationButton;
