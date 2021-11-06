import React, { useState, useContext } from 'react'

import { CurrentContext } from "../../context"
import './rates.css'

const Rates = () => {
  const { rate, currency } = useContext(CurrentContext)
  // const rate = {
  //   "USDAED": 3.673042,
  //   "USDAFN": 91.000368,
  //   "USDALL": 107.025041,
  //   "USDAMD": 475.910403,
  //   "USDANG": 1.802174
  // }
  return (
    <div className="wrapper-rate">
      <h2>Курс валют {currency} </h2>
      <div className="table-rate">
        <div className="row-rate">
          <div className="box-rate">NN</div>
          <div className="box-rate">Base</div>
          <div className="box-rate">Currency</div>
          <div className="box-rate">Amount</div>
        </div>

        {Object.keys(rate).map((it, index) => {
          return (
            <div key={index + 1} className="row-rate">
              <div className="box-rate">{index + 1}</div>
              <div className="box-rate">{it.slice(0, 3)}</div>
              <div className="box-rate">{it.slice(3, 6)}</div>
              <div className="box-rate">{(rate[it])}</div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Rates