function createJS() {
    
    console.log('message pass');
    document.body.style.backgroundColor="green";
    document.getElementById('01').style.backgroundColor="#166265";
    document.getElementById('02').style.backgroundColor="#341554";
    document.getElementById('03').style.backgroundColor="#685665";
    document.getElementById('04').style.backgroundColor="#985665";
    document.getElementById('01').style.fontSize="10";
    document.getElementById('02').style.fontSize="20";
    document.getElementById('03').style.fontSize="30";
    document.getElementById('04').style.fontSize="40";
    document.getElementById('05').style.backgroundColor=prompt("Enter your color");
}
function Onclick() {
    alert('ha moj ha.....');
}

function dd(){
    document.body.style.backgroundColor=document.getElementById('06').value;
}
function ddd() {
    document.getElementById('08').style.backgroundColor=document.getElementById('07').value;
}
function dadada(){
var dddd=prompt('enter yout surname');
var dadd=prompt('enter yout first name');
document.getElementById('09').innerHTML=dddd;
document.getElementById('10').innerText=dddd;
document.getElementById('11').innerText=dadd;
}   