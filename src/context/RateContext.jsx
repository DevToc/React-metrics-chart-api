import React, { useState } from "react";

const RateContext = React.createContext();

const RateProvider = (props) => {
  const { children } = props;
  const [rate, setRate] = useState({
    current: 0,
    bitcoin: 0,
    dcp: 0,
    loading: true
  });

  const changeRate = (val) => {
    if (val === true) {
      setRate({
        current: 0,
        bitcoin: 0,
        dcp: 0,
        loading: true
      })
    }
    else setRate({
      current: val.toFixed(4),
      bitcoin: (100000000 / val).toFixed(4),
      dcp: (val / 100000000).toFixed(6),
      loading: false
    });
  }

  return (
    <RateContext.Provider value={{ rate, changeRate }}>
      {children}
    </RateContext.Provider>
  )
}

export { RateContext, RateProvider };