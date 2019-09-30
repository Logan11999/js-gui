function clock() {
  var myTimer = setInterval(myClock, 1000);
  var c = 0;

  function myClock() {
    document.getElementById("second").innerHTML = ++c;
    if (c == 0) {
      document.getElementById("second").innerHTML = 0;
      document.getElementById("seconds").innerHTML = 1;
    }
    if (c==9) {
      
    }
  }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'start') {  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'stop') {  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'reset') {  }
})
