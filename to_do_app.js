document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('taskInput');
    const addTaskCheck = document.getElementById('addTaskCheck');
    const showTasksCheck = document.getElementById('showTasksCheck');
    const removeTaskCheck = document.getElementById('removeTaskCheck');
    const list = document.getElementById('taskList');
    let tasks = [];
    // Remove Task logic
    removeTaskCheck.addEventListener('change', function() {
        if (removeTaskCheck.checked) {
            if (tasks.length > 0) {
                tasks.pop();
                // Optionally update the list if visible
                if (list.classList.contains('visible')) {
                    list.innerHTML = '';
                    tasks.forEach(task => {
                        const li = document.createElement('li');
                        li.textContent = task;
                        list.appendChild(li);
                    });
                }
                // Show a message
                let msg = document.getElementById('addMsg');
                if (!msg) {
                    msg = document.createElement('div');
                    msg.id = 'addMsg';
                    msg.style.color = '#fff';
                    msg.style.background = 'linear-gradient(90deg, #335dd1ff, #61c5dfff)';
                    msg.style.marginTop = '20px';
                    msg.style.textAlign = 'center';
                    msg.style.fontWeight = 'bold';
                    msg.style.fontSize = '1.2em';
                    msg.style.borderRadius = '20px';
                    msg.style.width = '30%';
                    msg.style.marginLeft = 'auto';
                    msg.style.marginRight = 'auto';
                    msg.style.padding = '10px 0';
                    msg.style.border = '2px solid #072f4b';
                    msg.style.opacity = '0';
                    msg.style.transition = 'opacity 0.5s';
                    removeTaskCheck.parentNode.parentNode.insertBefore(msg, list);
                }
                msg.textContent = 'Last task removed!';
                msg.style.opacity = '1';
                setTimeout(() => {
                    msg.style.opacity = '0';
                }, 2000);
            } else {
                // Show a message if no tasks
                let msg = document.getElementById('addMsg');
                if (!msg) {
                    msg = document.createElement('div');
                    msg.id = 'addMsg';
                    msg.style.color = '#fff';
                    msg.style.background = 'linear-gradient(90deg, #335dd1ff, #61c5dfff)';
                    msg.style.marginTop = '20px';
                    msg.style.textAlign = 'center';
                    msg.style.fontWeight = 'bold';
                    msg.style.fontSize = '1.2em';
                    msg.style.borderRadius = '20px';
                    msg.style.width = '30%';
                    msg.style.marginLeft = 'auto';
                    msg.style.marginRight = 'auto';
                    msg.style.padding = '10px 0';
                    msg.style.border = '2px solid #072f4b';
                    msg.style.opacity = '0';
                    msg.style.transition = 'opacity 0.5s';
                    removeTaskCheck.parentNode.parentNode.insertBefore(msg, list);
                }
                msg.textContent = 'No tasks to remove!';
                msg.style.opacity = '1';
                setTimeout(() => {
                    msg.style.opacity = '0';
                }, 2000);
            }
            // Uncheck after action
            setTimeout(() => { removeTaskCheck.checked = false; }, 300);
        }
    });

    // Add Task logic
    addTaskCheck.addEventListener('change', function() {
        if (addTaskCheck.checked) {
            const task = input.value.trim();
            if (task) {
                tasks.push(task);
                input.value = '';
                // Show a message
                let msg = document.getElementById('addMsg');
                if (!msg) {
                    msg = document.createElement('div');
                    msg.id = 'addMsg';
                    msg.style.color = '#fff';
                    msg.style.background = 'linear-gradient(90deg, #335dd1ff, #61c5dfff)';
                    msg.style.marginTop = '20px';
                    msg.style.textAlign = 'center';
                    msg.style.fontWeight = 'bold';
                    msg.style.fontSize = '1.2em';
                    msg.style.borderRadius = '20px';
                    msg.style.width = '10%';
                    msg.style.marginLeft = 'auto';
                    msg.style.marginRight = 'auto';
                    msg.style.padding = '10px 0';
                    msg.style.border = '2px solid #072f4b';
                    msg.style.opacity = '0';
                    msg.style.transition = 'opacity 0.5s';
                    addTaskCheck.parentNode.parentNode.insertBefore(msg, list);
                }
                msg.textContent = 'Task added!';
                msg.style.opacity = '1';
                setTimeout(() => {
                    msg.style.opacity = '0';
                }, 2000);
            }
            // Uncheck after action
            setTimeout(() => { addTaskCheck.checked = false; }, 300);
        }
    });

    // Show Tasks logic
    showTasksCheck.addEventListener('change', function() {
        if (showTasksCheck.checked) {
            // Clear current list
            list.innerHTML = '';
            // Add all tasks
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                list.appendChild(li);
            });
            // Fade in
            list.classList.add('visible');
            // Uncheck after action
            setTimeout(() => { showTasksCheck.checked = false; }, 300);
        } else {
            // Fade out
            list.classList.remove('visible');
        }
    });
});
