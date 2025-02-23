import React from 'react'

const CustomButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={props.cls} type={props.type} style={props.style}>{props.val}</button>
    </>
  )
}

export default CustomButton