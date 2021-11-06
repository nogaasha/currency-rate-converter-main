import React, { useContext } from "react"
import { Link } from 'react-router-dom'

import "./Header.css"
import { CurrentContext } from "../../context"
import { takeIconCurrency } from "../../function"

const Header = () => {
  const { currency } = useContext(CurrentContext)

  return (
    <header>
      <h1>Currency conventer {takeIconCurrency(currency)}</h1>
      <div className="topbar">
        <div className="link"><Link to='/rates'>Currency</Link></div>
        <div className="link"><Link to='/'>Home</Link></div>
      </div>

    </header>
  )
}

export default Header;
