import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";

const SetCounter = function (){
    const initialSotre = useSelector(function (state){return state.count})
    const [count, setCount] = useState(initialSotre)
    const dispatch = useDispatch()
    const onSubmit = function (e){
        e.preventDefault()
        dispatch(set(count))
        
    }
    useEffect(function (){
        setCount(initialSotre)
    }, [initialSotre])
    return (
        <div>
            <form>
                <input value={count} onChange={function (e){return setCount(e.target.value)}} type="number"/>
                <button onClick={onSubmit} type="submit">Get Number</button>
            </form>
            
        </div>
    )
}

export default SetCounter;