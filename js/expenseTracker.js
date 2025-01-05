const exerciseSelect = document.getElementById('exercise');
    const countInput = document.getElementById('count');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const exerciseLog = document.getElementById('exerciseLog');

    addButton.addEventListener('click', () => {
      const exercise = exerciseSelect.value;
      const count = parseInt(countInput.value, 10);

      if (!count || count <= 0) {
        alert('Please enter a valid number of reps!');
        return;
      }

      const listItem = document.createElement('li');
      listItem.className = 'flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm';
      listItem.innerHTML = `
        <span>${exercise}</span>
        <span class="font-bold">${count} reps</span>
      `;

      exerciseLog.appendChild(listItem);

      // Clear input field
      countInput.value = '';
    });

    clearButton.addEventListener('click', () => {
      exerciseLog.innerHTML = '';
    });