const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Basic email regex validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function sendEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmail()) {
        // Construct the mailto link
        const mailtoLink = `mailto:your-abbasitm@myumanitoba.ca?subject=Contact Request&body=Email: ${email}`;
        window.location.href = mailtoLink; // Redirect to mailto link
    }
}