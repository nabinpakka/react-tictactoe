import React from 'react'

const Square = ({value, onClickHandler}) => {
  return (
    <button className={"square"} onClick={onClickHandler}>
      {value}
    </button>
  )
}

export default Square