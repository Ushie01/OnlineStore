import { style } from '@mui/system'
import React from 'react'

const btnColor = {
  borderRadius: "none",
  backgroundColor: "#000",
  color:"#fff",
  width: "120px",
  height: "50px",
  padding: "auto",
}

function Button() {
  return (
    <div>
      <button style={btnColor} variant="dark">Add To Cart</button>
    </div>
  )
}

export default Button
