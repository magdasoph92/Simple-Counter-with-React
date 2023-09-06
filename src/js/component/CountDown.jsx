import React, { useState } from "react";
import hourglassGif from "../../img/loadin_gif.gif";

let timer 
const CountDown = (props) => {
    const [countDown, setCountDown] = useState('')
    let [counter,setCounter] = useState(0)

    const start = () => {
         console.log(counter);
            timer = setInterval(() => {
                    console.log(counter);
                    setCounter(counter--)
                    if (counter === -1)
                    {
                        clearInterval(timer);
                      return;
                    }
                },1000);
    }
    console.log(countDown);

    const stop = () => {
        clearInterval(timer)
    }

    const reset = () => {
        
          setCounter(0)
          console.log(timer)
          clearInterval(timer)
          document.getElementById("myInput").value = "";
          
    }

    return(
    <div className="bg w-25 mx-auto mt-3 rounded p-3">
        <h3 className="text-center">Countdown Timer</h3>
        <h1 className="clock d-flex justify-content-center mx-auto"><img src={hourglassGif} id="hourglass"></img>
        </h1>
        <div className="text-center mb-2 fs-1">{counter}</div>
        <div className="d-flex justify-content-center">
        <input className="mb-2 mx-0 d-flex align-center" type="text" name="countDown" id="myInput" onChange={(e)=>setCounter(e.target.value)}></input>
        </div>
        <div className="d-flex align-items-start flex-row justify-content-center">    
            <button className="btn btn-success me-2" type="button" name="countDown" onClick={start}>Start</button>
            <button className="btn btn-danger me-2" type="button" name="countDown" onClick={stop}>Stop</button>
            <button className="btn btn-secondary" type="button" name="countDown" onClick={reset}>Reset</button>
        </div>

    </div>
    );
}



export default CountDown