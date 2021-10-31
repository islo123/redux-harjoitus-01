export const defaultState = {count: 400}


export const reducer = function (state= defaultState, action){
    if(action.type === "INCREMENT"){
        return {count: state.count + 1}
    } 
    if(action.type === "DECREMENT"){
        return {count: state.count - 1}
    }
    if(action.type === "SET"){
        return {count: parseInt(action.payload, 10)}
    }
    return state;
}
