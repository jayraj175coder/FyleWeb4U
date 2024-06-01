$(document).ready(function () {
    // Image Slider Functionality
    let currentIndex = 0; // Index of the currently displayed slide
    const items = $('.slider-item'); // All slider items
    const itemCount = items.length; // Total number of slider items

    // Function to show a specific slide based on index
    function showSlide(index) {
        if (index >= 0 && index < itemCount) {
            const translateX = -index * 100 / itemCount; // Calculate translation percentage
            $('.slider-inner').css('transform', `translateX(${translateX}%)`); // Apply transformation
            $('.dot').removeClass('active'); // Remove active class from all dots
            $(`.dot[data-slide=${index}]`).addClass('active'); // Add active class to the current dot
            currentIndex = index; // Update current index
        }
    }

    // Click event handler for slider dots
    $('.dot').on('click', function () {
        const index = $(this).data('slide'); // Get the index from the clicked dot
        showSlide(index); // Show the corresponding slide
    });

    // Initialize the slider by showing the first slide
    showSlide(0);
});

$(document).ready(function () {
    // Image Display Functionality on Text Box Click
    $('.text-box').click(function () {
        var imagePath = $(this).data('image'); // Get image path from the clicked text box's data attribute
        $('#image-display img').attr('src', imagePath); // Change the src attribute of the image in the display area
    });
});
