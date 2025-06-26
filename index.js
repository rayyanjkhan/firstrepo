document.addEventListener('DOMContentLoaded', function() {
    // This function runs when the entire HTML document has been completely loaded and parsed.

    console.log('Personal Bio Page loaded successfully!');

    // Get the span element where the current year will be displayed
    const currentYearSpan = document.getElementById('current-year');

    // Check if the element exists to prevent errors
    if (currentYearSpan) {
        // Create a new Date object to get the current year
        const currentYear = new Date().getFullYear();

        // Update the text content of the span with the current year
        currentYearSpan.textContent = currentYear;
    }
});

