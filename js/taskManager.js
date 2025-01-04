 // JavaScript functionality for the task manager
 const taskInput = document.getElementById('task-input');
 const addTaskBtn = document.getElementById('add-task-btn');
 const taskList = document.getElementById('task-list');

 // Function to add a new task
 const addTask = () => {
   const taskName = taskInput.value.trim();
   if (taskName) {
     const newTask = document.createElement('li');
     newTask.className = 'flex items-center justify-between p-2 bg-gray-200 rounded';
     newTask.innerHTML = `
       <span>${taskName}</span>
       <button class="btn btn-xs btn-error remove-task-btn">Remove</button>
     `;
     taskList.appendChild(newTask);
     taskInput.value = '';
     attachRemoveEvent(newTask.querySelector('.remove-task-btn'));
   }
 };

 // Function to attach remove event to buttons
 const attachRemoveEvent = (button) => {
   button.addEventListener('click', (e) => {
     e.target.parentElement.remove();
   });
 };

 // Add new task on button click
 addTaskBtn.addEventListener('click', addTask);

 // Add new task on pressing Enter
 taskInput.addEventListener('keypress', (e) => {
   if (e.key === 'Enter') {
     addTask();
   }
 });

 // Attach remove event to existing buttons
 document.querySelectorAll('.remove-task-btn').forEach(attachRemoveEvent);
