// selecting elements

var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var menu=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})