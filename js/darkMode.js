const body = document.body;
const toggleButton = document.getElementById('theme-toggle');

// Function to toggle dark mode
const toggleDarkMode = () => {
    const isDark = body.classList.contains('dark');

    if (isDark) {
        body.classList.remove('dark');
        body.classList.add('bg-white', 'text-black');
        body.classList.remove('bg-gray-900', 'text-white');
        toggleButton.textContent = '🌙';
    } else {
        body.classList.add('dark');
        body.classList.remove('bg-white', 'text-black');
        body.classList.add('bg-gray-900', 'text-white');
        toggleButton.textContent = '☀️';
    }
};

// Event listener for the button
toggleButton.addEventListener('click', toggleDarkMode);