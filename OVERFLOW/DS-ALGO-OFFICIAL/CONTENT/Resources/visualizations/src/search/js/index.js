var ARR = [];
var divs = [];
var N = 13;
var delay1 = 0; //milliseconds
var delay2 = 500;
var cont = document.getElementById("array_container");
cont.style = "flex-direction";
window.onload = genArray();

function change(d, h, c) {
  setTimeout(function () {
    d.style.backgroundColor = c;
  }, (delay1 += delay2));
}

function genArray() {
  cont.innerHTML = "";
  for (var i = 0; i < N; i++) {
    ARR[i] = Math.floor(Math.random() * 100 + 1);
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    divs[
      i
    ].style = ` margin: 0 0.2%; padding: 20px 0px 0px 0px;  width: ${60}px; height:${40}px; background-color: #40E0D0; text-size:5%; text-align: center;`;
    divs[i].textContent = ARR[i];
  }
}

function found(res, idx, inputval) {
  if (res == true) {
    setTimeout(function () {
      var x = document.getElementById("#array_container2");
      var y = document.querySelector("#result");
      y.textContent = "Element " + inputval + " found at index: " + idx;
      y.style.color = "red";
      change(divs[idx], ARR[idx], "#40E0D0", delay2);
    }, delay1);
  } else {
    setTimeout(function () {
      var x = document.getElementById("#array_container2");
      var y = document.querySelector("#result");
      y.textContent = inputval + " Element does not exist!";
      y.style.color = "red";
    }, delay1);
  }
}

genArray();

function search(ch) {
  genArray();
  delay1 = 0;
  var y = document.querySelector("#result");
  y.textContent = "";

  switch (ch) {
    case 1:
      linearsearch();
      break;
    case 2:
      binarysearch();
      break;
  }
}
