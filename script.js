//Signup functionality
// grabbing the signup form by its id from the html
const signup_form = document.getElementById('signup_form');
//
// grab the full name by its id
const full_name = document.getElementById('full_name');
//
//grab the email by its id
const email = document.getElementById('email');
//
//grab the password by it id
const password = document.getElementById('password');
//
//grab the message container by its id
const message = document.getElementById('message');
//
// function that handles signup process
function handle_signup(event) {
    event.preventDefault(); // stop page from reloading
    //
    // getting what the user typed and trimming extra spaces
    const name_value = full_name.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();
    //
    // check if any input field is empty,if so through a warning message
    if (name_value === '' || email_value === '' || password_value === '') {
        message.textContent = "Please fill in all fields!";
        message.style.color = "red"; //red because its an error
        return;
    }
    //
    // create object to store user data
    const user_data = {
        name: name_value,
        email: email_value,
        password: password_value
    };
    //
    // save user data to local storage and convert it to a string
    localStorage.setItem('remedygo_user', JSON.stringify(user_data));
    //
    // show success message once user fills all required spaces
    message.textContent = "Account created successfully!";
    message.style.color = "green"; //green to show success
    //
    // clear input fields
    signup_form.reset();
}
//
// if the signup form exists on this page, add submit event listener
if (signup_form) {
    signup_form.addEventListener('submit', handle_signup);
}
// Search clear button functionality
// grab the search input and clear button
const search_input = document.getElementById('search_input');
const clear_btn = document.querySelector('.clear_btn');
//
// function to clear the search bar
function clear_search_bar() {
    search_input.value = ''; // empty the input
    search_input.focus(); // move cursor back to input
}
//
// if both elements exist, add click event listener
if (search_input && clear_btn) {
    clear_btn.addEventListener('click', clear_search_bar);
}
// Cart functionality
// grab all cart buttons on items
const cart_buttons = document.querySelectorAll('.cart');
//
// grab the modal and its elements by their respective ids
const cart_modal = document.getElementById('cart_modal');
const cart_items_list = document.getElementById('cart_items_list');
const cart_total = document.getElementById('cart_total');
const clear_cart_button = document.getElementById('clear_cart');
const close_cart_button = document.getElementById('close_cart');
//
// create an array to store cart items (will load from local storage if exists)
let cart_items = JSON.parse(localStorage.getItem('remedygo_cart')) || [];
//
// function to update the modal content
function update_cart_display() {
    //
    // clear old items inside modal list
    cart_items_list.innerHTML = '';
    //
    // if cart is empty, show a message to indicate it is empty
    if (cart_items.length === 0) {
        cart_items_list.innerHTML = '<p>No items in cart.</p>';
        cart_total.textContent = 'Total: Sh 0';
        return;
    }
    //
    // create a variable to track total price
    let total_price = 0;
    //
    // loop through each item in cart and display it in the modal box
    cart_items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} — Sh ${item.price}`;
        cart_items_list.appendChild(li);
        //
        // add the price of the item added to the total price of the items in the cart
        total_price += item.price;
    });
    //
    // update total cost of the items in the cart
    cart_total.textContent = `Total: Sh ${total_price}`;
} 

// function to save cart items to local storage
function save_cart() {
    localStorage.setItem('remedygo_cart', JSON.stringify(cart_items));
}
//
// function to add items to the cart
function add_to_cart(name, price) {
    // create a small object for this item
    const item = { name: name, price: price };
    //
    // push it to our cart array
    cart_items.push(item);
    //
    // save new cart data
    save_cart();
    //
    // update the modal view with the items added
    update_cart_display();
}
//
// function to show the cart modal
function open_cart() {
    cart_modal.classList.remove('hidden'); // make modal visible 
    update_cart_display(); // refresh the display
}
//
// function to close the cart modal 
function close_cart() {
    cart_modal.classList.add('hidden'); // hide the modal
}
//
// function to clear all cart items
function clear_cart() {
    cart_items = []; // empty the array
    save_cart(); // update local storage
    update_cart_display(); // refresh popup
}

// attach event listeners to all the 🛒 buttons
cart_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //
        // find the parent div .items
        const item_div = button.closest('.items');
        //
        // get the name and price from the parent div
        const name = item_div.querySelector('.name').textContent;
        const price_text = item_div.querySelector('.price').textContent;
        //
        // extract number from "Sh 500" by removing "Sh " and converting to number
        const price = Number(price_text.replace('Sh ', ''));
        //
        // add item to cart
        add_to_cart(name, price);
        //
        // open the modal after adding
        open_cart();
  });
});
//
// add event listeners for modal buttons
if (close_cart_button) close_cart_button.addEventListener('click', close_cart);
if (clear_cart_button) clear_cart_button.addEventListener('click', clear_cart);