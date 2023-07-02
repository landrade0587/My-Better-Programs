/*ecuations*/
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const buttonInsert = document.getElementById('buttonInsert');
const buttonClear = document.getElementById('buttonClear');
const output = document.getElementById('output');

buttonInsert.onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;
  if (key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
};
buttonClear.onclick = function () {
  localStorage.clear();
  location.reload();
};
var sum = 0;
for (let i = 0; i < localStorage.length; i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  var valu = value.split("*");
  sum += parseInt(valu[0]); 
  output.innerHTML +=` ${key}: ${value} minutes <br />`;
}
var hoursleft = 40 - (sum / 60);
document.getElementById("time").innerHTML = `Total Minutes: ${sum} <br />`
document.getElementById("hoursleft").innerHTML = `Total Hours: ${sum/60} Hours Left : ${hoursleft}`