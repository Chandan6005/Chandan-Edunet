function reverse() {
    var name = document.getElementById("normal").value;
    var reversedName = name.split("").reverse().join("");    
    document.getElementById("result").innerText = reversedName;
}

function normal() {
    var reversedName = document.getElementById("reverse").value;
    var name = reversedName.split("").reverse().join("");    
    document.getElementById("result").value = name;
}

function add() {
    let fnum = parseFloat(document.getElementById("fnum").value);
    let snum = parseFloat(document.getElementById("snum").value);
    let sum = fnum + snum;
    document.getElementById("num_result").innerText = sum;
}

function subtract() {
    let fnum = parseFloat(document.getElementById("fnum").value);
    let snum = parseFloat(document.getElementById("snum").value);
    let difference = fnum - snum;
    document.getElementById("num_result").innerText = difference;
}

function multiply() {
    let fnum = parseFloat(document.getElementById("fnum").value);
    let snum = parseFloat(document.getElementById("snum").value);
    let product = fnum * snum;
    document.getElementById("num_result").innerText = product;
}

function divide() {
    let fnum = parseFloat(document.getElementById("fnum").value);
    let snum = parseFloat(document.getElementById("snum").value);
    let quotient = fnum / snum;
    document.getElementById("num_result").innerText = quotient;
}