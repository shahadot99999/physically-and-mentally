// document.getElementById('feedback-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from refreshing the page

//     // Collect comments and titles
//     const formData = new FormData(event.target);
//     const feedback = [];

//     formData.forEach((value, key) => {
//         const title = document.querySelector(`[name="${key}"]`).closest('.card-body').querySelector('.card-title').textContent;
//         feedback.push({ title, comment: value });
//     });

//     // Simulate sending feedback (console log for now)
//     console.log('Customer Feedback:', feedback);

//     // Show a confirmation message (optional)
//     // alert('Thank you for your feedback!');

//     // Clear the form
//     event.target.reset();
// });



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

    // Show a confirmation message (optional)
    //alert('Thank you for your feedback!');

    // Clear the form
    event.target.reset();
});