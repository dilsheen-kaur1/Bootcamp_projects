// Lecture: Project - Coding Task 3
let adddBtn = document.querySelector("#add-btn");
let listt = document.querySelector("#list");
let input = document.querySelector("#add-input");
let editt = document.querySelectorAll(".fa-pencil-square-o");
let deletee = document.querySelectorAll(".fa-times");
let inputList = document.querySelectorAll(".edit-note");

function removeline(e){
    
}

adddBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(input.value!=""){
        let li = document.createElement('li');
        li.innerHTML =`<p>${input.value}</p>
        <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
        <input class="edit-note" type="text">
        `
    listt.appendChild(li);   
    }    
})

console.log(deletee.length);

for(let i = 0;i<deletee.length;i++){
    deletee[i].addEventListener("click",function (e){
        let element = e.target;
        element.parentElement.parentElement.remove();
    });
}

for(let i=0;i<editt.length;i++){
    editt[i].addEventListener("click",function(e){
        // editt[i].style.visibility = "hidden";
        // deletee[i].style.visibility = "hidden";
        editt[i].parentElement.style.display = "none";
        inputList[i].style.display = "block";
        inputList[i].addEventListener('keypress',function(e){
            if(e.keyCode ==13){
                if(inputList[i].value!=""){
                    inputList[i].previousElementSibling.previousElementSibling.innerText =  inputList[i].value;
                    inputList[i].style.display = "none";
                    editt[i].parentElement.style.display = "block";
                }
                else{
                    inputList[i].parentElement.remove();
                }

            }
        })
    })
}


let hideBtn = document.querySelector("#hide-list");
hideBtn.addEventListener("click",function(){
    listt.style.display = "none";
    hideBtn.innerText = "Unhide Elements";
})

























