
    let one = document.getElementById("una");
    let two = document.getElementById("dalawa");

    
    
    // Enter trigger
    two.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myButton").click();
      }
    });

    // button Click Trigger
document.getElementById("myButton").onclick = function(){

    var convert1 = Math.round((one.value / 2.54)* 100) / 100;
    var convert2 = Math.round((two.value / 2.54) * 100) / 100;

    document.getElementById("sulat").innerHTML = `${convert1}" - ${convert2}"`;

 }



//  function addTable() {
//     const input = document.createElement("input"); 
//     document.body.append(input);
//  }