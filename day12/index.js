const tasks = document.querySelector('.tasks');
const inputVal = document.querySelector("#inputVal");
const addButton = document.querySelector("#add");

let total_task = [];

const addTask = (value)=>{
    const newTask = `
                <div class="task">
                    <h3>${value}</h3>
                    <input type="checkbox" name="checked">
                    <i class="fas fa-trash-alt fa-2x delete"></i>
                </div>
            `;
    tasks.innerHTML += newTask;
    total_task.push(newTask);
}


addButton.addEventListener("click",()=>{
        if((inputVal.value.trim()).length > 0){
            value = inputVal.value.trim();
            addTask(value);
        }
    }
)

tasks.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        const currTask = e.target.parentElement;
        currTask.classList.add("none");
    }else if(e.target.name === "checked"){
        const par = e.target.parentElement;
        const child = par.querySelector("h3");
        if(e.target.checked){
            
            child.style.textDecoration = "line-through";
            par.classList.add("complete");
        }else{
            child.style.textDecoration = "none";
            par.classList.remove("complete");
        }
    }
})






