document.addEventListener('DOMContentLoaded', () => {
    // Select all the necessary elements
    const counterDisplay = document.querySelector('.counter-display');
    const plusButton = document.querySelector('.plus-btn');
    const minusButton = document.querySelector('.minus-btn');
    const mainImage = document.getElementById('main-image');

    // --- Counter Logic ---
    let count = 0;

    // --- Image Gallery Logic ---
    const images = [
        "https://via.placeholder.com/250/007BFF/FFFFFF?text=Image+1",
        "https://via.placeholder.com/250/FF5733/FFFFFF?text=Image+2",
        "https://via.placeholder.com/250/33FF57/FFFFFF?text=Image+3",
        "https://via.placeholder.com/250/8A2BE2/FFFFFF?text=Image+4",
        "https://via.placeholder.com/250/FFFF33/000000?text=Image+5"
    ];
    let currentImageIndex = 0;

    // Function to update both the counter and the image
    const updateDisplay = () => {
        counterDisplay.textContent = count;
        mainImage.src = images[currentImageIndex];
    };

    // Event listener for the PLUS button
    plusButton.addEventListener('click', () => {
        // Increment the counter
        count++;

        // Go to the next image, looping back to the start if at the end
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        // Update the display with new values
        updateDisplay();
    });

    // Event listener for the MINUS button
    minusButton.addEventListener('click', () => {
        // Decrement the counter, but not below 0
        if (count > 0) {
            count--;
        } else {
            // Set counter text to minimum limit
            counterDisplay.textContent = "Minimum Limit";
        }
        
        // Go to the previous image, looping back to the end if at the start
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        
        // Update the display with new values
        updateDisplay();
    });

    // Initial update
    updateDisplay();
});