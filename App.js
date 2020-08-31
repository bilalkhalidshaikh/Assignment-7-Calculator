var output = document.getElementById("input");
var letter = /^[a-zA-Z]+$/;

function key(num) {
  output.value += num;
}
function clearScr() {
  output.value = " ";
}

function result() {
  if (output.value.match(letter)) {
    output.value = "Please Enter Number";
    return false;
  } else {
    output.value = eval(output.value);
  }
}
output.addEventListener("keypress",(e)=>{
  if(e.keyCode===13){
    result()
  }
})
function back() {
  output.value.length--;
}

// ServiceWorker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
// ServiceWorker
