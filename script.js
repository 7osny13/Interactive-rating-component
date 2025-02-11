const rate = document.getElementById('rate');
const thank = document.getElementById('thank');
const ratingButtons = document.querySelectorAll('section button');
const submitButton = document.getElementById('submitRating');
const selectedRatingEl = document.getElementById('selectedRating');


// Variable to store the selected rating
let selectedRating = null;

// Add click event listeners to rating buttons
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove selected state from all buttons
        ratingButtons.forEach(btn => {
            btn.setAttribute('aria-checked', 'false');
            btn.classList.remove('selected'); // If you want to add visual styling
        });

        // Set selected state for clicked button
        button.setAttribute('aria-checked', 'true');
        button.classList.add('selected'); // If you want to add visual styling
        
        // Store the selected rating value
        selectedRating = button.dataset.value;
    });
});



// Handle submit
submitButton.addEventListener('click', () => {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert';
    
    if (!selectedRating) {
        alertBox.classList.add('error');
        alertBox.textContent = 'Please select a rating first!';
    } else {
        alertBox.classList.add('success');
        alertBox.textContent = `Thanks for rating us ${selectedRating} stars!`;
        selectedRatingEl.textContent = selectedRating;
        rate.style.display = 'none';
        thank.style.display = 'flex';
    }

    document.body.appendChild(alertBox);

    // Remove alert after 3 seconds
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
});