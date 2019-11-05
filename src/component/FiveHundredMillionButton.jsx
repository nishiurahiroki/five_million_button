import React from 'react'

export default ({label, onClick}) => {
  const YEAR = 500000000
  return (
    <>
      <button onClick={() => onClick(YEAR)}>{label}</button>
    </>
  )
}
