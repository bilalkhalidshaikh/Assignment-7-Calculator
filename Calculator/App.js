function key(num){
  var output =  document.getElementById('input');
  output.value += num

}
function clearScr(){
  var output =  document.getElementById('input');
  output.value = "0";
}

function result(){
  var output = document.getElementById('input');
  output.value = eval(output.value)
}

function back(){
  var output = document.getElementById('input');
  parseFloat(output.toString().substring(0, output.length - 1));
}

