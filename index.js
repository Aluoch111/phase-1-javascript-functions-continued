// code your solution here
function saturdayFun(activity){
    if(activity === undefined){
        activity = "roller-skate!";
    }else{
        activity = "bathe my dog!";
    }
 return `This Saturday, I want to ${activity}`;
}
saturdayFun();
function mondayWork(activity){
 if (activity === undefined) {
    activity = "go to the office." ;
 } else {
    activity = "work from home."
 }
 return `This Monday, I will ${activity}`;
}
mondayWork();
function wrapAdjective(n){
    let result ;
    if(n === "*"){
      result =  function wrap(){
            return "You are *a hard worker*!";
        }
        
    }
    else if(n === "||"){
      result =  function wrap1(){
            return "You are ||a dedicated programmer||!";
        }
    }
    return result ;
}
wrapAdjective();