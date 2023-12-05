document.getElementById('pushTask').addEventListener('click', addTask);

function addTask() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const tasksContainer = document.getElementById('tasks');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title !== '') {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <div class="task-title">${title}</div>
            <div class="task-description">${description}</div>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        tasksContainer.appendChild(taskDiv);

        titleInput.value = '';
        descriptionInput.value = '';
    }
}

function deleteTask(button) {
    const taskDiv = button.parentNode;
    taskDiv.remove();
}
