import React,{useState, useEffect} from "react";
import clockGif from "../../img/Analog_clock_animation.gif";

const SecondsCounter = (props) => {
    let [counter, setCounter] = React.useState(0)
    useEffect(() => {
        setInterval(() => {
            setCounter(counter++)
            // console.log(counter);
        },1000);
    },[])
    return(
        <div className="w-50 mx-auto mt-5 rounded bg">
        <div className="bg rounded d-flex justify-content-center">
        <h1 className="clock"><img src={clockGif} id="clock"></img>
        </h1>
        <h1 className="num p1">
          
        {Math.floor(counter / 100000) % 10}
      </h1>
      <h1 className="num ">
        {Math.floor(counter / 10000) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(counter / 1000) % 10}
      </h1>
      <h1 className="num ">
        {Math.floor(counter / 100) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(counter / 10) % 10}
      </h1>
      <h1 className="num">
        {Math.floor(counter / 1) % 10}
      </h1>
 
        </div>
       <h5 className="card-title text-center mb-5 pb-2">Time since loaded</h5>
    </div>
    );
}
export default SecondsCounter