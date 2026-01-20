 import React from 'react'
import Loading40 from './Loading40.gif'

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <img
        src={Loading40}
        alt="Loading..."
        style={{ width: "120px", height: "120px" }}
      />
    </div>
  )
}

export default Spinner
