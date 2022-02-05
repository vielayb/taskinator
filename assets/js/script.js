var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

  event.preventDefault();

    var listItemEl = document.createElement("li");
    // adding css styling to the element
    listItemEl.className = "task-item";
    // adding text to the new list element
    listItemEl.textContent = "This is a new task.";
    // pushing the new listItem to the tasksToDoEl which is the <ul>
    tasksToDoEl.appendChild(listItemEl);
  }

  formEl.addEventListener("submit", createTaskHandler);