// Grab form and input elements as per their IDs
const signup_form = document.getElementById('signup_form');
const full_name = document.getElementById('full_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

// Listen for form submit
if (signup_form) {
    signup_form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent page reload

        // Get input values
        const name_value = full_name.value.trim();
        const email_value = email.value.trim();
        const password_value = password.value.trim();

        // Validate fields
        if (name_value === '' || email_value === '' || password_value === '') {
            message.textContent = "Please fill in all fields!";
            message.style.color = "red";
            return;
        }

        // Create user object
        const user_data = {
            name: name_value,
            email: email_value,
            password: password_value
        };

        // Save user to localStorage
        localStorage.setItem('remedygo_user', JSON.stringify(user_data));

        // Show success message
        message.textContent = "Account created successfully!";
        message.style.color = "green";

        // Clear form
        signup_form.reset();
    });
}