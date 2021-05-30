import React from 'react'
import{useState} from "react"
import { useDispatch } from "react-redux";
import styles from "./Counter.css"


function Counter(props) {
    const [dta, setdta] = useState(0)
    const dispatch =  useDispatch()

    const{name}=props;
  
    const ad =()=>{
        setdta(dta+1)
        dispatch({type:"INCREMENT"})
    }
    const sub =()=>{
        setdta(dta-1)
        dispatch({type:"DECREMENT"})
    }
    return (
        <div className="fdiv">
            
            <h1>{dta}</h1>
            <h3>{name}</h3>
            <button onClick={ad}>Add</button>
            <button onClick={sub}>Sub</button>
        </div>
    )
}

export default Counter
