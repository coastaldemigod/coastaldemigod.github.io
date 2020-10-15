var colors ={
    
}

var input = document.getElementsByClassName("ipbox")[0];
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementsByClassName("addbtn")[0].click();
  }
});
function add(){
    var ls=document.createElement("li");
    var an=document.createElement("a");
    var mov=document.getElementsByClassName("ipbox")[0].value;
    var movn=document.createTextNode(mov);
    an.classList.add("list-item");
    an.appendChild(movn);
    ls.appendChild(an);
    document.getElementsByClassName("list-items")[0].appendChild(ls);
    document.getElementsByClassName("ipbox")[0].value='';
}