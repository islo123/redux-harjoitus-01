const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const SET = "SET"

const increment = function (){
   return {type: "INCREMENT"}
}

const decrement = function (){
    return {type: "DECREMENT"}
 }

 const set = function (value){
    return {type: "SET", payload: value}
 }

 export {increment,decrement,set,INCREMENT,DECREMENT,SET}