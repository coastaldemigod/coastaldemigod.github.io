var colors =[ 
  "#36ba01",
  "#009a22",
  "#00ff2b",
  "#009a22",
  "#36ba01",
  "#00ff00",
  "#00FF41"
];

import {mov} from "./dt.js";

// generating the movie list
var movlist=document.getElementById('list-items');
for(var i=0;i<mov.length;i++)
{
  var a=document.createElement('a');
  var movi=document.createTextNode(`${mov[i]}`);
  a.appendChild(movi);
  a.href=`https://www.google.com/search?q=${mov[i]}`
  a.style.color=colors[Math.floor(Math.random()*5+1)];
  var li=document.createElement('li');
  li.appendChild(a);
  movlist.appendChild(li);
}

var input = document.getElementsByClassName("ipbox")[0];
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementsByClassName("addbtn")[0].click();
  }
});

// to add more titles
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
    var li=document.getElementsByTagName('li');
  for( var i=0;i<li.length;i++)
  {
    li[i].style.display = "";
    li[i].style.color=colors[Math.floor(Math.random()*5+1)];
  }
}

// to search already present titles
function search() {

  var input, filter, ol, li, a, i, txtValue;
  input = document.getElementsByClassName('ipbox')[0];
  filter = input.value.toUpperCase();
  ol = document.getElementsByClassName("list-items")[0];
  li = ol.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// so that the html can use these functions (because this js file is a module)
window.search=search
window.add=add