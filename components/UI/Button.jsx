import React from 'react'

const Button = ({ btn_class, label }) => {
    let className = ""
    if (btn_class === "btn-field") {
        className = "btn btn-primary"
    } else {
        className = "btn"
    }
  return (
      <button className={className}>
          {label}
      </button>
  )
}

export default Button