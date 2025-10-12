// ----- SIGNUP FORM -----
const signup_form = document.getElementById('signup_form');
const full_name = document.getElementById('full_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

if (signup_form) {
  signup_form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop reload

    const name_value = full_name.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    if (name_value === '' || email_value === '' || password_value === '') {
      message.textContent = "Please fill in all fields!";
      message.style.color = "red";
      return;
    }

    const user_data = {
      name: name_value,
      email: email_value,
      password: password_value
    };

    localStorage.setItem('remedygo_user', JSON.stringify(user_data));

    message.textContent = "Account created successfully!";
    message.style.color = "green";

    signup_form.reset();
  });
}

// ----- SEARCH CLEAR BUTTON -----
const searchInput = document.getElementById('search_input');
const clearBtn = document.querySelector('.clear_btn');

if (searchInput && clearBtn) {
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';  // clear the input
    searchInput.focus();     // put cursor back
  });
}