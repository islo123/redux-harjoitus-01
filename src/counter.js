import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, set } from "./actions";
import SetCounter from "./setCounter";


const Counter = function (){
    const count = useSelector(function (state){return state.count});
    const dispatch = useDispatch()
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={function (){return dispatch(increment())}}>Increment</button>
            <button onClick={function (){return dispatch(decrement())}}>Decrement</button>
            <button onClick={function (){return dispatch(set(0))}}>Set</button>
            <SetCounter/>
        </div>
    )
}

export default Counter