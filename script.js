// Signup form functionality
// grabbing the signup form by its id from the html
const signup_form = document.getElementById('signup_form');
//
// grabbing the full name input field
const full_name = document.getElementById('full_name');
//
// grabbing the email input field
const email = document.getElementById('email');
//
// grabbing the password input field
const password = document.getElementById('password');
//
// grabbing that small text area for displaying messages (like errors or success)
const message = document.getElementById('message');
//
// checking if that signup form even exists on this page before running code
if (signup_form) {
  // when someone clicks submit, do this function
  signup_form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop the page from refreshing
    //
    // getting what the user typed and trimming out extra spaces
    const name_value = full_name.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();
    //
    // check if any of the fields are empty 
    if (name_value === '' || email_value === '' || password_value === '') {
      message.textContent = "Please fill in all fields!"; // show a warning message
      message.style.color = "red"; // make it red cause its a warning
      return; // stop here if they didn’t fill it
    }
    //
    // make an object to store user data
    const user_data = {
      name: name_value,
      email: email_value,
      password: password_value
    };

    // store that data in the browser’s local storage so info doesn’t get lost when u refresh
    localStorage.setItem('remedygo_user', JSON.stringify(user_data));
    //
    // show success message that the signup worked
    message.textContent = "Account created successfully!";
    message.style.color = "green"; // make it green 
    //
    // reset the form so it clears everything after submitting
    signup_form.reset();
  });
}

// Search clear button functionality
// grabbing the search input field
const searchInput = document.getElementById('search_input');
//
// grabbing the clear button
const clearBtn = document.querySelector('.clear_btn');
//
// check if both exist before doing anything
if (searchInput && clearBtn) {
  // when u click the clear button
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';  // clear whatever text was in that search bar
    searchInput.focus();     // bring the cursor back to the search bar so u can type again
  });
}