const taskContainer = document.querySelector(".task_container");

const globalStore = [];

const generateNewCard = (taskData)=>`<div class="col-md-6 col-lg-4" id=${taskData.id}>
<div class="card ">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>

  </div>
  <img src=${taskData.imageUrl} class="card-img-top" alt="card image">

  <div class="card-body">
    <h5 class="card-title">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
  <div class="card-footer ">
    <button type="button" class="btn btn-outline-primary float-end">open Task</button>

  </div>
</div>
</div>`;


const loadInitialCardData = () => {
  //localstorageto get tasky card data
  const getCardData = localStorage.getItem("tasky");
  
  //convert from string to normal object
  const {cards} = JSON.parse(getCardData);

  //loop over these arry of task object to create HTML  card, inject it to DOM
  cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));

    //update our globalStore
    globalStore.push(cardObject);

  })
}

const saveChanges =() =>{
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };
    

  taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

  globalStore.push(taskData);

  localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));//an object
};


//issues
//page refresh will cause the data to be deleted -> local Storage->5MB

//feature
//delete the card
//Edit the card
//Open the card