import React, {useState} from "react";
import Container from "../hoc/Container";
import Map from "../assets/img/map.png";
import DurationButton from "./DurationButton";
import Trand from "./Trand";
import Graph from "./Graph";
import SellBuy from "./SellBuy";
import Converter from "./Converter";
const Home = () => {
  const [Values,setValues]=useState()
  const sendDataToGraph=(values)=>{
    setValues(values)    
  }
  return (
    <main className="w-full">
      <Container>
        <div className="min-h-[100vh] flex flex-col">
          <p class="lg:text-[60px] text-[22px] py-4 text-center font-extrabold text-gray-900">
            DemocraticCooperative.cash
          </p>
          <div className="grow flex flex-col justify-center items-center  ">
            <DurationButton sendDataToGraph={sendDataToGraph}/>
            <div className="mt-8 w-full flex justify-center">
              <div className="flex w-full flex-col sm:flex-row justify-between max-w-[559px]">
                <div className="input-form mb-5 sm:mb-0 mx-auto flex items-center">
                  <label htmlFor="from">CURRENT FORM:</label>
                  <input type="date" className="ml-4" />
                </div>
                <div className="input-form mb-5 sm:mb-0 mx-auto flex items-center">
                  <label htmlFor="from">TO:</label>
                  <input type="date" className="ml-4" />
                </div>
              </div>
            </div>

            <div className="w-full xl:flex-row flex-col mt-[40px] flex justify-between items-center">
              <Trand />
              <Graph  values={Values}/>
              <div className="xl:max-w-[350px] max-w-[561px] mb-8 w-full">
                <SellBuy />

                <p className="text-[26px] mt-3 font-extrabold text-[#A0A0A0] text-center">
                  each bitcoin = 8596548 dcp
                </p>

                <Converter />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
