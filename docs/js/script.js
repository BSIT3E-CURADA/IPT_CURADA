$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('.nav-link-active').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section's ID from the href attribute
        var target = $(this).attr('href');

        // Animate scrolling to the target section
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top,
            },
            1000 // 1000ms = 1 second animation duration
        );
    });
});
