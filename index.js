document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const preview = document.getElementById('preview');

    // Function to add a new to-do item
    function addTodo() {
        const task = todoInput.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            // Create and append the delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => listItem.remove());
            listItem.appendChild(deleteBtn);

            // Add event listener to preview the task on hover
            listItem.addEventListener('mouseover', () => previewTask(task));
            listItem.addEventListener('mouseout', clearPreview);

            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    // Function to preview the task
    function previewTask(task) {
        preview.textContent = task;
    }

    // Function to clear the preview
    function clearPreview() {
        preview.textContent = '';
    }

    // Event listener for the add button
    addBtn.addEventListener('click', addTodo);

    // Allow pressing 'Enter' to add a task
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});

