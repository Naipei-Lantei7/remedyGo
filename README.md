# RemedyGo Pharmacy Website
RemedyGo is a simple pharmacy-themed web project that lets users browse medicine categories, search products, sign up, and manage a small shopping cart (modal popup).  
The project was built using **HTML**, **CSS**, and **JavaScript** — clean, minimal, and responsive enough for beginners and intermediate devs.

---

##  Project Overview
This site mimics an online pharmacy where customers can:
- View medicines or categories.
- Search for items using a search bar.
- Clear the search field easily.
- Sign up with name, email, and password (data saved locally).
- Add products to a cart and view them inside a modal popup.

Everything is stored in the browser’s **localStorage**, meaning user data (like signups and cart items) don’t vanish when you refresh.

--
## Project Structure
RemedyGo
│
|___ index.html # Home page (medicines display + cart buttons)
|___ about.html # About section with mission & vision
|___ contacts.html # Contact info and social links
|___ signup.html # Sign up form page
│
|___ styles.css # All the styling, green-white pharmacy theme
|___ script.js # Handles signup, search, and cart modal logic
│
|___ README.md 
---

## Styling (styles.css)
The site uses soft **green and white tones** to give it a medical vibe:
- Header and footer: clean white & deep green mix.
- Buttons: `#2ea44f` (light green) and `#006b3c` (deep green).
- Layout: Flexible boxes, rounded corners, minimal shadows for elegance.

Main CSS sections include:
- Global reset & font styling
- Header navigation
- Medicines/product grid
- Search bar design
- Modal cart styling
- Signup form layout
- Footer structure

---

## JavaScript Logic (script.js)
The JS file controls all page interactivity using **DOM manipulation** — no frameworks used, just raw code.

### 1. Signup Handling (`handle_signup`)
- Captures name, email, password from the signup form.
- Validates empty fields.
- Saves user data in `localStorage`.
- Displays success/error messages below the form.

### 2. Search Bar
- Includes a clear button to empty the search field instantly.
- Keeps focus inside the search bar after clearing (clean UX).

### 3. Cart Modal
- Each medicine has an **Add to Cart (🛒)** button.
- Clicking it adds product details to an in-memory array and localStorage.
- The modal (`<dialog>`) pops up showing:
  - Item list with price
  - Total cost
  - “Clear Cart” and “Checkout” buttons
- Cart data stays stored even after refresh.

### 4. Local Storage Usage
- Saves both **user signup data** and **cart info** persistently.
- Can be cleared manually or via clear buttons.

---

## Features Summary
| Feature | Description |
| Sign up | Create a user account and save info locally |
| Search | Find items and clear easily |
| Add to Cart | Add medicines and open cart modal |
| View Cart | Displays selected items in popup dialog |
| Clear/Checkout | Empty cart or simulate checkout |
| Responsive | Works fine on desktop and medium screens |

---

##  How To Run

1. Clone or download this repo: