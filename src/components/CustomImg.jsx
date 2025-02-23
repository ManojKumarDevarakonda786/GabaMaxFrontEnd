import React from 'react'

const CustomImg = (props) => {
  return (
    <>
      <img src={props.src} alt={props.alt} width={props.width} height={props.height} className={props.cls} style={props.style} />
    </>
  )
}

export default CustomImg