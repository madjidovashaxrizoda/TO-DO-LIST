const myUl = document.querySelector("#myUl");
const myHeader = document.querySelector(".buttons");
const myInput = document.querySelector("#myInput");
const btn = document.querySelector("#btn");

myHeader.addEventListener('submit', formHandler);
function formHandler() {
    event.preventDefault;
}

btn.addEventListener('click', myFunction)

function myFunction() {
const newLi = document.createElement("li");
const taskText = myInput.value;
newLi.innerText = taskText;
myUl.append(newLi);

const dBtn = document.createElement('button');
dBtn.setAttribute ('role','button');
dBtn.innerText = 'x';
dBtn.classList.add('deleteBtn');
newLi.append(dBtn);


for(let i=0; i<dBtn.length; i++){
        dBtn[i].onclick = function(){
            this.parentNode.remove();
        }
    
}
}








// const myLi = document.querySelector('.myLi')
const deleteBtn = document.querySelectorAll(".deleteBtn");
console.log(deleteBtn);

for(let i=0; i<deleteBtn.length; i++){
    deleteBtn[i].onclick = function(){
        this.parentNode.remove();
    }
}




myInput.value = '';
myInput.focus();
