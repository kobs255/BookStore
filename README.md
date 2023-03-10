<h1>Book Store</h1>
<h2>Overview</h2>
<p>This is a relatively simple application that allows a user to purchase books from an online store, and fill out contact/shipping information to determine where the order is sent (similar to Shopify). Application currently doesn't persist information.</p>
<h2>Technologies Used</h2>
<ul>
  <li>Angular - Simplifies single page application development.</li>
  <li>TypeScript - Similar to JavaScript. Using for better autocompletion.</li>
  <li>Bootstrap - Easier to format HTML elements with responsiveness.</li>
  <li>css - Used for minor element styling.</li>
  <li>HTML</li>
  <li>AutoMapper - Converts one object to another via property mapping.</li>
  <li>ASP.net for WebAPI - Used to create endpoints for database access.</li>
  <li>Microsoft SQL Server - RDBMS</li>
</ul>
<h2>Technologies Needing Implementation</h2>
<ul>
  <li>Something for session handling.</li>
</ul>

<h2>Current Features</h2>
<ul>
  <li>Item page where user can add items to cart.</li>
  <li>Cart page where user can see their item quantities, prices, and total cost.</li>
  <li>Checkout page where user enters contact information used for shipping/tracking purposes.</li>
  <li>Simple search feature to filter results.</li>
  <li>Pagination on store page</li>
  <li>Display items being purchased at checkout in a scrollable format.</li>
  <li>Make each item clickable that forwards user to more info on the product.</li>
  <li>Persistent data storage</li>
</ul>
<h2>Features Needing Implementation (in order of priority)</h2>
<ul>
  <li>Page to display when the user hasn't added any products to their cart (cart is empty page).</li>
  <li>API to retrieve books to display on the product page and to store purchase order information.</li>
  <li>User session management.</li>
  <li>Page to show recent orders. Since there is no login, maybe an order lookup page requiring purchase email and order id.</li>
</ul>
<p><i>*Features will be updated regularly.</i></p>
