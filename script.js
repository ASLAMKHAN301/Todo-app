const body = document.querySelector('body');
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeToggleDarkIcon = document.querySelector('.theme-toggle-dark-icon');
const themeToggleLightIcon = document.querySelector('.theme-toggle-light-icon');
const inputDiv = document.querySelector('.input-div');
const input = document.querySelector('.input');
const outputDiv = document.querySelector('.output-div');
const mobileDiv = document.querySelector('.mobile-div');
const darkImg = document.querySelector('.dark-img');
const lightImg = document.querySelector('.light-img');
const createdDiv = document.querySelector('.created-div');
const itemsLeftBtn = document.querySelector('.items-left-btn');
const allBtn = document.querySelector('.all-btn');
const activeBtn = document.querySelector('.active-btn');
const completedBtn = document.querySelector('.completed-btn');
const clearBtn = document.querySelector('.clear-btn');
const filters = document.querySelectorAll(".filters span");
const clearCompleted = document.querySelector(".clear-btn");
const totalItem = document.querySelector(".totalItem");
const completeBtn = document.querySelector("#completed");
const completBtn = document.querySelector(".complet");
const todoDiv = document.querySelector(".todo-div");
const colors = document.querySelectorAll(".colors");
const colorItem = document.querySelector(".colorItem");
const colorAll = document.querySelector(".colorAll");
const colorActive = document.querySelector(".colorActive");
const colorCompleted = document.querySelector(".colorCompleted");
const colorClearCompleted = document.querySelector(".colorClearCompleted");

themeToggleBtn.addEventListener('click',function(e){
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    body.classList.toggle('dark');
    inputDiv.classList.toggle('dark');
    input.classList.toggle('dark');
    outputDiv.classList.toggle('dark');
    mobileDiv.classList.toggle('dark');
    darkImg.classList.toggle('hidden');
    lightImg.classList.toggle('hidden');
    todoDiv.classList.toggle('light');
    colors.forEach((clr) =>{
        colorItem.classList.toggle("high");
        colorItem.classList.toggle('low');
        colorAll.classList.toggle("high");
        colorAll.classList.toggle('low');
        colorActive.classList.toggle("high");
        colorActive.classList.toggle('low');
        colorCompleted.classList.toggle("high");
        colorCompleted.classList.toggle('low');
        colorClearCompleted.classList.toggle("high");
        colorClearCompleted.classList.toggle('low');    
    });
});

let arrays = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn =>{
    // console.log(btn);
    btn.addEventListener("click",() =>{
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        createDivs(btn.id);
        // console.log(btn.id);
    });   
});

function createDivs(filter) {
    let li = "";
    if (arrays) {
        arrays.forEach((s, id) => {
            let isCompleted = s.status === "completed" ? "checked" : "";

            // "active" ko "pending" se map karna
            if ((filter === "active" && s.status === "pending") || 
                (filter === s.status) || 
                (filter === "all")) {

                li += `<div class="new-div-${id}">
                    <div class="flex items-center justify-between p-4 group">
                        <div class="flex space-x-5">
                            <input onclick="updateStatus(this)" type="checkbox" id="${id}" class="check-btn-${id} rounded-full w-5 h-5 pr-[2px]" ${isCompleted}>
                                <img src="images/icon-check.svg" alt="" class="check-icon-${id} hidden" />
                            </input>
                            <p class="empty-div-${id} ${isCompleted} cursor-pointer ">${(s.name)}</p>
                        </div>
                        <img onclick='deleteTask(${id}, "${filter}")' src="images/icon-cross.svg" alt="" class="close-icon-${id} opacity-0 group-hover:opacity-100  w-4 cursor-pointer">
                    </div> 
                    <hr class="w-full">
                  </div>`;                 
            };            
        });
    };
    totalItem.textContent = arrays ? arrays.filter(item => item.status === "pending").length : 0;
    createdDiv.innerHTML = li;
};
createDivs("all");

clearCompleted.addEventListener("click",() => {
    arrays.splice(0, arrays.filter(item => item.status === "completed").length);
    localStorage.setItem("todo-list", JSON.stringify(arrays));
    createDivs("all");
});

function updateStatus(selectedTask) {   
    let taskName = selectedTask.parentElement.lastElementChild;
    // console.log(taskName);
    if (selectedTask.checked) {
      taskName.classList.add("checked");
      arrays[selectedTask.id].status = "completed";
    } else {
      taskName.classList.remove("checked");
      arrays[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(arrays))
};
function deleteTask(deleteId, filter) { 
  arrays.splice(deleteId, 1);
  localStorage.setItem("todo-list", JSON.stringify(arrays));
  createDivs(filter);
};

inputDiv.addEventListener("keyup",function(e){
    let userTask = input.value.trim();   
    if(e.key === "Enter" && userTask){
        
        if(!arrays){
            arrays = [];
        };
        
        input.value =""; 
        let taskInfo = { name: userTask, status: "pending" };
        arrays.push(taskInfo);
        // id++;      
        localStorage.setItem("todo-list", JSON.stringify(arrays));  
        createDivs("all");   
    }      
});

completeBtn.addEventListener("click", (e) =>{
    totalItem.textContent = 0 ;
});
completBtn.addEventListener("click", (e) =>{
    totalItem.textContent = 0 ;
});

// function handleItem(item){
//     const checkBtn = document.querySelector(`.check-btn-${item}`);
//     const closeIcon = document.querySelector(`.close-icon-${item}`);
//     const emptyDiv = document.querySelector(`.empty-div-${item}`);
//     const checkIcon = document.querySelector(`.check-icon-${item}`);
//     const newDiv = document.querySelector(`.new-div-${item}`);
//     // const newArray = arrays.filter((arrays) => arrays ===(`${}`));

//     // if (!checkBtn) {
//     //     console.log(`Element .check-btn-${item} nahi mila`);
//     //     return;
//     // }
//     // console.log(arrays);  
//     checkBtn.addEventListener('click',function(e){
//         checkIcon.classList.toggle('hidden');
//         checkBtn.classList.toggle('checkbtn');
//         emptyDiv.classList.toggle('addLine')
//         emptyDiv.classList.toggle('ld');
//         // emptyDiv.classList.remove('light');
//     });
//     closeIcon.addEventListener('click',function(e){
//         newDiv.classList.add('hidden')
//     });   
// }