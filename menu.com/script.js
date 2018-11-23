var a = document.getElementById("sub_menu4");
var c = document.getElementById("close");
a.addEventListener("click", function(){
  var b = document.getElementById("window");
  b.style.display = "block"
});
c.addEventListener("click", function(){
  var b = document.getElementById("window");
  b.style.display = "none"
});