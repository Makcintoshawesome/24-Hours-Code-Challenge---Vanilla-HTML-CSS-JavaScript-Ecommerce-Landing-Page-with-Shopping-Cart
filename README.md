# 24-Hours-Code-Challenge---Vanilla-HTML-CSS-JavaScript-Ecommerce-Landing-Page-with-Shopping-Cart
24 Hours Code Challenge - Vanilla HTML, CSS &amp; JavaScript  Ecommerce Landing Page with Shopping Cart


# THREADED E-commerce Application

## How to Run the Application

Follow these steps to run the THREADED e-commerce application on your local machine:

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended for full functionality)

### Steps

1. **Download the Project Files**
   - Clone this repository or download the ZIP file and extract it to your desired location.

2. **Set Up a Local Web Server (Optional but Recommended)**
   - If you have Python installed:
     - Navigate to the project directory in your terminal or command prompt.
     - Run `python -m http.server 8000` for Python 3.x
     - Or run `python -m SimpleHTTPServer 8000` for Python 2.x
   - If you have Node.js installed:
     - Install `http-server` globally by running `npm install -g http-server`
     - Navigate to the project directory and run `http-server`
   - Alternatively, you can use any other local server solution you prefer.

3. **Open the Application**
   - If using a local server:
     - Open your web browser and go to `http://localhost:8000` (or the appropriate port if different)
   - If not using a server:
     - Simply double-click the `index.html` file to open it in your default web browser

4. **Navigate the Site**
   - Explore the homepage, add items to your cart, and test the checkout process.
   - Note that without a backend, form submissions and payments won't be processed.

5. **Testing Different Pages**
   - Homepage: `index.html`
   - Shopping Cart: `cart.html`
   - Checkout: `checkout.html`

### Additional Notes

- The application uses local storage to maintain cart data between sessions.
- To clear your cart completely, you may need to clear your browser's local storage for this site.
- This is a front-end only application. No actual transactions will be processed.

### Troubleshooting

- If images or styles aren't loading correctly, ensure you're using a local server as described in step 2.
- If you encounter any JavaScript errors, check the browser's console for more information.

## Customization

- To modify product data, edit the relevant HTML sections in `index.html`.
- Styles can be adjusted in the `styles.css` file.
- Core functionality is contained in `scripts.js`.

For any additional help or inquiries, please open an issue in this repository.
