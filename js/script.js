// Sample users
const users = ["user1", "user2", "user3"];
let currentUser = null;

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    if (users.includes(username)) {
        currentUser = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('user-name').innerText = currentUser;
    } else {
        alert('Invalid username');
    }
}

// Function to add a new task
function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() === '') {
        alert('Task cannot be empty');
        return;
    }
    const task = {
        text: taskText,
        completed: false
    };
    tasks.push(task);
    document.getElementById('new-task').value = '';
    renderTasks();
}

// Function to toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        if (task.completed) {
            taskDiv.classList.add('completed');
        }
        taskDiv.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskDiv);
    });
}

// Event listeners
document.getElementById('login-button').addEventListener('click', login);
document.getElementById('add-task-button').addEventListener('click', addTask);

// Initialize tasks array
const tasks = [];
