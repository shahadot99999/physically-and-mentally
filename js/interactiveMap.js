const gymData = {
    "push-ups": [
        "Build Upper Body Strength",
        "Enhances Core Stability",
        "Improves Cardiovascular Health",
        "Functional Movement Improvement",
        "No Equipment Needed"
    ],
    "pull-ups": [
        "Increases Upper Body Strength",
        "Enhances Grip Strength",
        "Promotes Muscle Symmetry",
        "Improves Posture",
        "Functional Strength"
    ],
    "bench-press": [
        "Chest Muscle Development",
        "Boosts Upper Body Strength",
        "Improves Bone Density",
        "Enhances Pushing Power",
        "Supports Muscle Mass Building"
    ],
    "shoulder-press": [
        "Strengthens Shoulders",
        "Improves Overhead Stability",
        "Engages Core Muscles",
        "Increases Shoulder Mobility",
        "Promotes Muscle Symmetry"
    ],
    "bicep-curls": [
        "Builds Bicep Strength",
        "Improves Arm Aesthetics",
        "Enhances Grip Strength",
        "Supports Everyday Lifting",
        "Versatile Exercise"
    ]
};

const items = document.querySelectorAll('.gym-item');
const infoBox = document.getElementById('info-box');
const itemTitle = document.getElementById('item-title');
const benefitsList = document.getElementById('benefits-list');
const removeButton = document.getElementById('remove-button');

let selectedItem = null;

items.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.id;
        const benefits = gymData[id];
        
        if (benefits) {
            selectedItem = item;
            itemTitle.textContent = item.textContent;
            benefitsList.innerHTML = benefits.map(benefit => `<li>${benefit}</li>`).join('');
            infoBox.classList.remove('hidden');
        }
    });
});

// Hide info box when clicked outside
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('gym-item') && !infoBox.contains(e.target)) {
        infoBox.classList.add('hidden');
    }
});

// Remove info box when the remove button is clicked
removeButton.addEventListener('click', () => {
    infoBox.classList.add('hidden');
    selectedItem = null;
});