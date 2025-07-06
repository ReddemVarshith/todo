

const aButton=document.getElementById("add");

function Adding(){
const inputs1=document.getElementById("inputs");
const area=document.createElement("span");
 const textValue= document.createElement("p");
 textValue.innerText=inputs1.value;
if(inputs1.value==""){
    alert("Erri");
    return 0;
}
const ListBody=document.getElementById("lists");
ListBody.appendChild(area);
const ListItem=document.createElement("li");
const RemoveButton=document.createElement("button");
RemoveButton.innerText="Remove";
RemoveButton.setAttribute("style","padding: 10px 20px; background-color: #44bd32;color: white;border: none; border-radius: 5px;cursor: pointer;font-size: 16px;");
const MarkButton=document.createElement("button");
MarkButton.setAttribute("style","padding: 10px 20px; background-color: #44bd32;color: white;border: none; border-radius: 5px;cursor: pointer;font-size: 16px;");
MarkButton.innerText="Mark";
//
area.appendChild(ListItem);
ListItem.appendChild(textValue);
ListItem.appendChild(RemoveButton);
ListItem.appendChild(MarkButton);
ListBody.appendChild(ListItem);
inputs1.value=null;
//
RemoveButton.addEventListener("click",function Removing(){
ListItem.remove();
});
//
MarkButton.addEventListener("click",function Marking(){
        textValue.setAttribute("style","text-decoration:line-through");
});

}


