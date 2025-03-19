# Assessment #3

This project dynamically generates a webpage showcasing favorite music artists using JavaScript (ES6+), DOM manipulation, and asynchronous programming. Users can like artists and fetch additional details asynchronously.

Features
- Dynamically Generated Content – Uses JavaScript to create the entire page structure.
- Artist Profiles – Displays artist names, images, and short biographies.
- Like Button – Users can like an artist, and the like count updates dynamically.
- More Info Button – Fetches extra artist details asynchronously with a simulated API call.
- Modern ES6+ JavaScript – Uses template literals, arrow functions, async/await, and promises.

# Project Structure

/project-folder
│── index.html  # Main HTML file
│── script.js   # JavaScript for DOM manipulation & async logic
│── styles.css  # CSS for styling (if applicable)
│── images/     # Folder containing artist images
│── README.md   # Project documentation (this file)

# Technologies Used
JavaScript (ES6+) – For DOM manipulation & event handling
HTML5 – Structure of the webpage
CSS3 – Basic styling
Async/Await & Promises – Handles data fetching dynamically


# How It Works
The script dynamically injects HTML content into the page.
Artist profiles are generated from an array of objects containing their details.
Clicking the "Like ❤️" button increases the like count for an artist.
Clicking "More Info" fetches extra details asynchronously, simulating an API call with setTimeout().

