import React from 'react'
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SpinnerC() {
  return (
    <div className="app__spinner" style={{ backgroundColor: "#eff4f8", alignContent: 'center' }}>
        <Spinner type="grow" color="info" style={{width: '4rem', height: '4rem'}}/>
    </div>
  )
}

export default SpinnerC