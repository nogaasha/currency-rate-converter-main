import React from "react"
import classes from './MySelect.module.css'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        )
      })}
    </select>
  )
}

export default MySelect