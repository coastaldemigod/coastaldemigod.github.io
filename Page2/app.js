var colors =[
  "#36ba01",
  "#009a22",
  "#00ff2b",
  "#009a22",
  "#36ba01",
  "#00ff00",
  "#00FF41"
]

for( var i=0;i<document.getElementsByTagName('li').length;i++)
{
  document.getElementsByTagName('li')[i].style.color=colors[Math.floor(Math.random()*5+1)];
  console.log(Math.floor(Math.random()*4+1));
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
    
for( var i=0;i<document.getElementsByTagName('li').length;i++)
{
  document.getElementsByTagName('li')[i].style.color=colors[Math.floor(Math.random()*5+1)];
  console.log(Math.floor(Math.random()*4+1));
}
}