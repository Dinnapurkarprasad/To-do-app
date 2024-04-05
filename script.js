const inputbox=document.getElementById("input box");
const listcontainer=document.getElementById("list");

function AddTAsk(){
   if(inputbox.value === '')
   {
    alert("YOU NEED TO WRITE SOMETHING");
   }
   else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);

    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);

   }
   inputbox.value="";
   save_data();
}

listcontainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI")
   {
      e.target.classList.toggle("check");
      save_data();
   }
   else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      save_data();
   }

},false);

function save_data(){
   localStorage.setItem("data",listcontainer.innerHTML);
}
function show_Task()
{
   listcontainer.innerHTML=localStorage.getItem("data");
}
show_Task();