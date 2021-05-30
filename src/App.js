import React from "react"
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Counter";
import { increment } from "./redux/rootReducer";

import styles from "./App.css"



function App() {
 
  const selecta = useSelector(state=>state.count)
  const dispatch =  useDispatch()

  const voters = [
    "Apple ",
    "Banana",
    "Orange",
    "Pineapple"
  ];

  return (
 
  
  <div className="siv">
      <h1>Total fruits:{selecta}</h1>
     <button onClick={(() => dispatch({type:"INCREMENT"}))}>ADD</button>
     <button onClick={(() => dispatch({type:"DECREMENT"}))}>SUB</button>

      {voters.map((voter) => {
        return <Counter name={voter} />
      }
      )}
    </div>
  )
}

export default App



























