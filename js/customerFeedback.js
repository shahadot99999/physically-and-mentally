
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Collect comments and titles
        const feedback = [];

        document.querySelectorAll('.card-body').forEach((card) => {
            const title = card.querySelector('.card-title').getAttribute('data-title');
            const comment = card.querySelector('textarea').value.trim();

            if (comment) { // Only add feedback if a comment is provided
                feedback.push({ title, comment });
            }
        });

        // Simulate sending feedback (console log for now)
        console.log('Customer Feedback:', feedback);

        // Dynamically display feedback in HTML
        const feedbackContainer = document.getElementById('feedback-display');
        feedbackContainer.innerHTML = ' '; // Clear previous feedback

        feedback.forEach((item) => {
            const feedbackItem = document.createElement('div');
            feedbackItem.className = 'p-4 bg-gray-100 rounded-lg shadow mb-4';
            feedbackItem.innerHTML = `
                <h3 class="font-bold text-lg">${item.title}</h3>
                <p class="text-gray-700">${item.comment}</p>
            `;
            feedbackContainer.appendChild(feedbackItem);
        });

        // Clear the form
        event.target.reset();
    });

