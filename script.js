
    let one = document.getElementById("una");
    let two = document.getElementById("dalawa");
    let onecjd = document.getElementById("ship1");
    let twocjd = document.getElementById("ship2");
    
    
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
  // button Click Trigger for CJD
 document.getElementById("cjd").onclick = function(){

  var convert1 = parseFloat(onecjd.value);
  var convert2 = parseFloat(twocjd.value);

  document.getElementById("cjdshipping").innerHTML = "Shipping Fee: " + `$${convert1} \n Service Fee: $${convert2} \n Total: $`+ (convert1+convert2).toFixed(2);

}
    // Enter trigger for CJD
    twocjd.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("cjd").click();
      }
    });

//  function addTable() {
//     const input = document.createElement("input"); 
//     document.body.append(input);
//  }