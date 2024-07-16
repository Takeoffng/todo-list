document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const preview = document.getElementById('preview');

    function addTodo() {
        const task = todoInput.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => listItem.remove());
            listItem.appendChild(deleteBtn);

           
            listItem.addEventListener('mouseover', () => previewTask(task));
            listItem.addEventListener('mouseout', clearPreview);

            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    function previewTask(task) {
        preview.textContent = task;
    }

    function clearPreview() {
        preview.textContent = '';
    }

    addBtn.addEventListener('click', addTodo);

   todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});

