document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle'); // Select all toggle buttons
    const menuToggle = document.querySelector('.menu-toggle'); // Adjust selector based on your HTML
    const navigation = document.querySelector('.Navigation'); // Select the navigation menu
    const navLinks = navigation.querySelectorAll('a'); // Select all navigation links
    const video = document.getElementById('myVideo');
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsDisplay = document.getElementById('commentsDisplay');
    const currentDateDiv = document.getElementById('currentDate');

    // Adding current date in the format "Tuesday, November 19, 2024"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options); // Get the current date in the desired format
    currentDateDiv.textContent = currentDate; // Set the date text without "Current Date:"

    // Create the toggle button lines for each toggle
    toggles.forEach(toggle => {
        toggle.innerHTML = `
            <div></div>
            <div></div>
            <div></div>
        `;

        // Toggle the navigation menu on button click
        toggle.addEventListener('click', function() {
            navigation.classList.toggle('active'); // Toggle the 'active' class
        });
    });

    // Toggle mobile navigation visibility
    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });

    // Close the menu when a link is clicked and highlight the active link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
            // Close the navigation menu
            navigation.classList.remove('active'); // Remove 'active' class to close menu
        });
    });

    // Close mobile menu when a link is clicked
    navigation.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navigation.classList.remove('active');
        }
    });

    // Close the menu on larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navigation.classList.remove('active');
        }
    });

    // Ensure the video is paused
    if (video) {
        video.pause(); 
    }

    // Handle comment submission
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const commentText = commentInput.value; // Get the comment text
        if (commentText.trim() === "") return; // Ignore empty comments

        // Create a new comment element
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;

        // Add the new comment to the comments display
        commentsDisplay.appendChild(commentDiv);

        // Clear the input field
        commentInput.value = '';
    });
});