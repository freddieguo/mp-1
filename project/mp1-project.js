let first;
let second;
let result;
function add(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    result = Number(first) + Number(second);
    displayResult(result);
}

function min() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    result = Number(first) - Number(second)
    displayResult(result);
}

function mul() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    result = Number(first) * Number(second);
    displayResult(result);
}

function div() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    result = Number(first) / Number(second);
    displayResult(result);
}

function pow() {
    first = document.getElementById("input-1").value;
    second = document.getElementById("input-2").value;
    let powResult = 1;
    for(let i=0; i<Number(second); i++){
        powResult = powResult * Number(first);
    }
    result = powResult
    displayResult(result);
}

function clearEverything(){
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
    document.getElementById("output").innerHTML = "";
}

function displayResult(){
    if (result<0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "black";
    }
    document.getElementById("output").innerHTML = String(result);
}