 // JavaScript to handle wishlist functionality
 document.addEventListener('DOMContentLoaded', () => {
    const exercises = [
        "Push-ups", "Pull-ups", "Bench Press", "Dumbbell Shoulder Press", "Bicep Curls",
        "Tricep Dips", "Dumbbell Flyes", "Lateral Raises", "Incline Dumbbell Press", "Arnold Press"
    ];

    const exerciseList = document.getElementById('exercise-list');
    const wishlist = document.getElementById('wishlist');

    // Populate the exercise list
    exercises.forEach((exercise, index) => {
        const listItem = document.createElement('li');
        listItem.className = "flex items-center justify-between p-2 border-b border-gray-300";
        listItem.innerHTML = `
            <span>${exercise}</span>
            <button class="btn btn-primary btn-sm" data-exercise="${exercise}">Add</button>
        `;
        exerciseList.appendChild(listItem);
    });

    // Handle adding items to the wishlist
    exerciseList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const exercise = event.target.getAttribute('data-exercise');
            const wishlistItem = document.createElement('li');
            wishlistItem.className = "flex items-center justify-between p-2 border-b border-gray-300";
            wishlistItem.innerHTML = `
                <span>${exercise}</span>
                <button class="btn btn-error btn-sm" data-exercise="${exercise}">Remove</button>
            `;
            wishlist.appendChild(wishlistItem);

            // Disable the button after adding
            event.target.disabled = true;
            event.target.textContent = 'Added';
        }
    });

    // Handle removing items from the wishlist
    wishlist.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const exercise = event.target.getAttribute('data-exercise');

            // Remove the item from the wishlist
            const listItem = event.target.closest('li');
            listItem.remove();

            // Re-enable the corresponding Add button
            const addButton = exerciseList.querySelector(`button[data-exercise="${exercise}"]`);
            if (addButton) {
                addButton.disabled = false;
                addButton.textContent = 'Add';
            }
        }
    });
});