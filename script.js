// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove 'visible' class based on viewport
function handleScroll() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when page loads
handleScroll();