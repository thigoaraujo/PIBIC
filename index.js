
var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {

        var menu = this.querySelector('.dropdown-menu');

        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
});

document.addEventListener('click', function(event) {
 
    var isClickInsideDropdown = event.target.closest('.dropdown');

    if (!isClickInsideDropdown) {
        dropdowns.forEach(function(dropdown) {
            var menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
        });
    }
});

// Add smooth animation to dropdown
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        var menu = this.querySelector('.dropdown-menu');
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        // Add smooth animation
        menu.style.transition = 'opacity 0.3s ease';
    });
});

// Close dropdown on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        dropdowns.forEach(function(dropdown) {
            var menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
        });
    }
});

// Toggle dropdown on hover
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function(event) {
        var menu = this.querySelector('.dropdown-menu');
        menu.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function(event) {
        var menu = this.querySelector('.dropdown-menu');
        menu.style.display = 'none';
    });
});

// Close dropdown on outside click
document.addEventListener('click', function(event) {
    var isClickInsideDropdown = event.target.closest('.dropdown');
    if (!isClickInsideDropdown) {
        dropdowns.forEach(function(dropdown) {
            var menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
        });
    }
});

// Scroll to top button
var scrollToTopButton = document.getElementById('scrollToTop');

// Show button when user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Scroll to top function
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
