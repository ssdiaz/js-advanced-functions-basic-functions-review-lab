// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}
// SOLUTION 
// let wrapAdjective = function(style="*") {
//     return function(adjective="special") {
//       return `You are ${style}${adjective}${style}!`
//     }
//   }

const Calculator = {
    add: function(a,b) {
    return a + b
    }, 

    subtract: function(a,b) {
        return a - b
    }, 

    multiply: function(a,b) {
        return a * b
    }, 

    divide: function(a,b) {
        return a / b
    }
}

// copied this one!
let actionApplyer = function(startInt, functionArray){

    for (let i = 0; i < functionArray.length; i++){
        startInt = functionArray[i](startInt)
    }

    return startInt
}


