document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("addToDo");
  const ulTodoList = document.querySelector("ul");

  const createTodoElement = (task) => {
      const li = document.createElement("li");
      li.textContent = task;

      li.addEventListener("click", () => {
          li.classList.toggle("clicked");
      });

      const deleteButton = document.createElement("span");
      deleteButton.innerHTML = '.span';
      deleteButton.addEventListener("click", () => {
          span.remove();
      });

      span.appendChild(deleteButton);

      return li;
  };
  const addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.addEventListener("click", () => {
      if (inputTodo.value.trim() !== "") {
          const newTodo = createTodoElement(inputTodo.value.trim());
          ulTodoList.appendChild(newTodo);
          inputTodo.value = "";
      }
  });
});

  inputTodo.addEventListener("keypress", (event) => {
      if (event.key === "Enter" && inputTodo.value.trim() !== "") {
          const newTodo = createTodoElement(inputTodo.value.trim());
          ulTodoList.appendChild(newTodo);
          inputTodo.value = "";
      }
  });

  


  
  