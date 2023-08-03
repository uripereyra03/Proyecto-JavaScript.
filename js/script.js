document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";

            const taskLabel = document.createElement("label");
            taskLabel.className = task.completed ? "form-check-label fw-light text-decoration-line-through" : "form-check-label";
            taskLabel.innerHTML = `
            <input type="checkbox" class="form-check-input" ${task.completed ? "checked" : ""} />
            ${task.title}
        `;

            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger";
            deleteButton.setAttribute("data-index", index);
            deleteButton.textContent = "Eliminar";

            listItem.appendChild(taskLabel);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }

    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask() {
        const taskTitle = taskInput.value.trim();
        if (taskTitle === "") return;

        const newTask = {
            title: taskTitle,
            completed: false,
        };

        tasks.push(newTask);
        saveTasksToLocalStorage();
        renderTasks();
        taskInput.value = "";
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasksToLocalStorage();
        renderTasks();
    }

    function toggleTaskCompleted(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasksToLocalStorage();
        renderTasks();
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const index = event.target.getAttribute("data-index");
            deleteTask(index);
        } else if (event.target.tagName === "INPUT") {
            const index = event.target.parentNode.getAttribute("data-index");
            toggleTaskCompleted(index);
        }
    });

    renderTasks();
});
