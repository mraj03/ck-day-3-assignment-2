const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];

let currentIndex = 0;

function displayCurrentName(){
        const displayName = document.getElementById('displayName');
        displayName.textContent = names[currentIndex];
}

function showPrevious(){
    currentIndex = (currentIndex + 1)% names.length;
    displayCurrentName();
}

function showNext(){
    currentIndex = ((currentIndex - 1) + names.length)% names.length;
    displayCurrentName();
}

displayCurrentName();