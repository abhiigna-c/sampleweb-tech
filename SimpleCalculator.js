function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}
function divide(a,b){
  if(b==0){
    return "Error: Division by zero";
  } else{
    return a/b;
  }
}
function calcu()
{
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let op = document.getElementById("math").value;
  
  let result;
  if(op=='add'){
    result = add(a,b);
  }
  else if(op=='sub'){
    result = subtract(a,b);
  } 
  else if(op=='Mul'){
    result = multiply(a,b);
  }
  else if(op=='div'){
    result = divide(a,b);
  }
  document.getElementById("result").innerText = "Result: " + result;
}

function clearScreen(){
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result: ";
}
