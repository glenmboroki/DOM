document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn2").addEventListener("click", function() {
  alert("Hello World!");
});

let x = document.getElementById("myBtn4");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}

window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});

let p1 = 5;
let p2 = 7;
document.getElementById("myBtn9").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demo").innerHTML = a * b;
}

  document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  },true);

  document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
