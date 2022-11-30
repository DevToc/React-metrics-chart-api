import React,{ useContext, useState } from "react";
import CONSTS from "../CONSTS";
import { RateContext } from "./RateContext";

const TrendContext = React.createContext();

const TrendProvider =   (props) => {
  const {children} = props;
  const [trend, setTrend] = useState({
    hourTrend:0,
    dayTrend:0,
    weekTrend:0
  })
  const changeTrend = async () => {
      const response = await fetch(CONSTS.GET_CURRENT_RATE);
      let rate = await response.json();
      let currentrate = Object.values(rate)[0];
      let date = new Date();
      date = date.getTime();
      let hour = date - 3600*1000;
      let day = date -24*3600*1000;
      let week = date - 7*24*3600*1000;
      let res = await fetch(CONSTS.GET_BY_DATE+"/"+hour);
      let data = await res.json();
      hour = Object.values(data)[0];

      res = await fetch(CONSTS.GET_BY_DATE+"/"+day);
      data = await res.json();
      day = Object.values(data)[0];

      res = await fetch(CONSTS.GET_BY_DATE+"/"+week);
      data = await res.json();
      week = Object.values(data)[0];
      setTrend({
        hourTrend:(currentrate/hour).toFixed(2),
        dayTrend:(currentrate/day).toFixed(2),
        weekTrend:(currentrate/week).toFixed(2),
      })  
      console.log("col")
  }
  

return (
  <TrendContext.Provider value= {{trend,changeTrend}}>
    {children}
  </TrendContext.Provider>
)

}



export { TrendContext, TrendProvider };