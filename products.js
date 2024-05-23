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


var search = document.getElementById("search")
var product = document.getElementById("productcontainer")
var productlist = product.querySelectorAll("div")


search.addEventListener("keypress",function()

{
    var enteredvalue = event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1)
        {
            var productname = productlist[count].querySelector("h1").textContent
          if(productname.toUpperCase().indexOf(enteredvalue)<0 )
            {
                productlist[count].style.display="none"
            }
            else
            {
                productlist[count].style.display="block"
            }
        }
        }
    )
   