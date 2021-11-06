import React, { useState, useContext, useEffect } from 'react'

import MySelect from '../UI/MySelect'
import MyInput from '../UI/MyInput'
import './main.css'
import { CurrentContext } from "../../context"
import { takeIconCurrency, takeCurrency, takeTargetCurrency, takeSourceTarget } from '../../function'

const Main = () => {
  // const rate = {
  //   "USDAED": 3.673042,
  //   "USDAFN": 91.000368,
  //   "USDALL": 107.025041,
  //   "USDAMD": 475.910403,
  //   "USDANG": 1.802174,
  //   "USDRUB": 71.583007
  // }

  const { currency, rate } = useContext(CurrentContext)

  const [amount, setAmount] = useState(0)
  const [result, setResult] = useState(0)

  const [sourceCurrency, setSourceCurrency] = useState(takeCurrency(currency))
  const [targetCurrency, setTargetCurrency] = useState(takeCurrency(takeTargetCurrency))

  const options = [
    { value: 'USD', name: 'USD - US Dollar' },
    { value: 'RUB', name: 'RUB - Russian Ruble' }
  ]

  const viewAmount = (num) => {
    console.log('viewAmount', num, typeof (num), amount)
    if (typeof (num) !== 'undefined') {
      return `${sourceCurrency.icon}${(parseFloat(num)).toFixed(2)}`
    }
    return `${sourceCurrency.icon}0.00`
  }

  const changeFromCurrency = (str) => {
    setSourceCurrency({ ...sourceCurrency, name: str, icon: takeIconCurrency(str) })
  }
  const changeToCurrency = (str) => {
    setTargetCurrency({ ...targetCurrency, name: str, icon: takeIconCurrency(str) })
  }
  const countRate = () => {
    const currencyKey = `${sourceCurrency.name}${targetCurrency.name}`
    const koef = rate['USDRUB']
    let res = amount * takeSourceTarget(currencyKey, koef)
    setResult(res)
  }

  return (
    <main>
      <section className="form-container">
        <div className="table">
          <div className="row">
            <label className="box" htmlFor="amount">Amount</label>
            <div className="box input-text">
              <span>{sourceCurrency.icon}</span>
              <MyInput
                type="text"
                name="amount"
                id="amount"
                // value={amount}
                inputMode="decimal"
                onChange={(e) => {
                  if (!isNaN(+e.target.value)) {
                    setAmount(e.target.value)
                  }
                }
                }
                placeholder="Enter amount"
              />
            </div>
            <div className="box">{viewAmount(amount)}</div>
          </div>

          <div className="row">
            <label className="box" htmlFor="from">From</label>
            <div className="box input-text">
              <MySelect
                options={options}
                defaultValue={sourceCurrency.name}
                value={sourceCurrency.name}
                onChange={(e) => changeFromCurrency(e)}
              />
            </div>
            <div className="box">{sourceCurrency.name}</div>
          </div>

          <div className="row">
            <label className="box" htmlFor="To">To</label>
            <div className="box input-text">
              <MySelect
                options={options}
                defaultValue=""
                value={targetCurrency.name}
                onChange={(e) => changeToCurrency(e)}
              />
            </div>
            <div className="box">{targetCurrency.name}</div>
          </div>
          <div className="row">
            <button className="box submit-button" type="button" onClick={countRate}>
              Convert
            </button>
            <div className="box result">{`${amount}${sourceCurrency.icon} = ${result}${targetCurrency.icon}`}</div>
          </div>

        </div>
      </section>
    </main>
  )
}
export default Main