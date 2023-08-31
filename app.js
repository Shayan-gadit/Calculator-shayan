var inp = document.getElementById("ddis")
console.log(inp.value);

function addValue(num){
    console.log(num);
    inp.value += num;
}

function celValue(){
    inp.value = eval(inp.value);
}
function cleanValue(){
    inp.value = "";
}
function back(){
    inp.value = inp.value.slice (0, -1);}

    var multiply = "*";
    var divided = "/";
    var percentage = multiple,divided;
    

  function percentage1(num){
    inp.value += percentage(inp.value);
  }  
