let itemsList = document.querySelector("#list");
let adicionarButton = document.querySelector("#adicionarButton");
let inputText = document.querySelector("#inputText");


adicionarButton.addEventListener("click",function(e){
    AdicionarItem();
});


function AdicionarItem(){
    let li = document.createElement("li");
    
    let spam = document.createElement("spam");
    spam.textContent += inputText.value;
    spam.classList.add("list-item");
    
    let checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("list-item");

    let deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "DEL";
    deleteButton.classList.add("item-delete-button");
    
    
    li.appendChild(checkbox);
    li.appendChild(spam);
    li.appendChild(deleteButton);
    itemsList.appendChild(li);
    
    checkbox.addEventListener("change",function(e){
        marcarTarefa(li);
    });

    deleteButton.addEventListener("click",function(e){
        removeTarefa(li);
    });

    inputText.value = "";
    console.log(event.target);
    
}
function marcarTarefa(li){
    for (task of itemsList.childNodes){
        if (task.isSameNode(li)) {
            task.children[1].classList.toggle("marked-item");
            console.log(event.target);
        }
    }
};
function removeTarefa(li){
    event.target.parentNode.remove();
    };
