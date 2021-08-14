function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(monday = "go to the office"){
    return `This Monday, I will ${monday}.`
}
function wrapAdjective(wrap="*"){
    return function(adj ="special"){
        return `"You are "${wrap} ${adj} ` ;
    }
}
