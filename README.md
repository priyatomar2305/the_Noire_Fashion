# 🛍️ Fashion E-Commerce Frontend

A modern, responsive **Fashion E-Commerce Website** built with React.js, Tailwind CSS, Redux Toolkit, and React Router DOM.

The project provides a complete shopping experience with product browsing, categories, wishlist, cart management, search, and order history.

🌐 Live Demo https://the-noire-fashion.vercel.app/

## 🚀 Tech Stack

* **React.js** – Frontend library
* **Vite** – Development and build tool
* **Tailwind CSS** – Styling and responsive UI
* **React Router DOM** – Client-side routing
* **Redux Toolkit** – Global state management
* **React Redux** – React integration with Redux
* **React Icons** – UI icons
* **JavaScript (ES6+)**

## ✨ Features

### 🏠 Home

* Fashion hero section
* Featured categories
* Trending products
* New arrivals
* Best-selling products
* Promotional sections

### 🛒 Shopping

* Browse all products
* Product categories
* Product details
* Search products
* Filter products
* Sort products
* Add products to cart
* Quantity management

### ❤️ Wishlist

* Add products to wishlist
* Remove products from wishlist
* Toggle wishlist status

### 🛍️ Cart

* Add/remove products
* Increase/decrease quantity
* Calculate subtotal
* Calculate total price
* Display total cart items
* Clear cart
* Empty cart state

### 📦 Order History

* View previous orders
* Order ID
* Order date
* Purchased products
* Total amount
* Order status

### 📱 Responsive Design

The website is responsive across:

* Desktop
* Laptop
* Tablet
* Mobile

## 🗂️ Project Structure

```text
frontend/
│
├── public/
│   └── images/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── CartItem.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Orders.jsx
│   │   ├── Search.jsx
│   │   └── NotFound.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── cartSlice.js
│   │       ├── wishlistSlice.js
│   │       └── productSlice.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 📌 Routes

| Route                     | Description          |
| ------------------------- | -------------------- |
| `/`                       | Home page            |
| `/shop`                   | All products         |
| `/category/:categoryName` | Products by category |
| `/product/:id`            | Product details      |
| `/cart`                   | Shopping cart        |
| `/wishlist`               | Wishlist             |
| `/orders`                 | Order history        |
| `/search`                 | Search results       |
| `*`                       | 404 page             |

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the frontend

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite.

## 🏗️ Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔄 Redux State Management

Redux Toolkit is used to manage global application state.

### Cart State

The cart manages:

* Products
* Quantities
* Total items
* Total price

### Wishlist State

The wishlist manages:

* Saved products
* Add/remove functionality
* Wishlist status

### Product State

The product state manages product data used throughout the application.

## 🎨 UI & UX

The application focuses on:

* Premium fashion-store design
* Clean layouts
* Responsive grids
* Product hover effects
* Smooth transitions
* Modern navigation
* Accessible buttons and icons
* Mobile-friendly interface

## 🔮 Future Improvements

* User authentication
* Backend integration
* MongoDB database
* Payment gateway
* Real product API
* User profile
* Product reviews
* Product ratings
* Admin dashboard
* Order checkout
* Persistent cart using localStorage

## 👩‍💻 Author

**Priya Tomar**

MERN Stack Developer

---

⭐ If you like this project, consider giving the repository a star!
