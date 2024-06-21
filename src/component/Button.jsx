/* eslint-disable react/prop-types */
import React from 'react'

function Button({btn, result }) {

  return (
    <>
    {
    btn.func=='handleButtonClick' ? 
    (<button className={btn.isA} onClick={()=>{result(btn.pass)}} >{btn.type}</button>) 
    :(<button className={btn.isA} onClick={result} >{btn.type}</button>)

    }
    </>
  )
}

export default Button