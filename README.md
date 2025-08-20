# E-comer Web Project

A modern electronic shop website built with **React**, **Vite**, and **Tailwind CSS**.  
This project provides a seamless online shopping experience, featuring a product catalog, shopping cart, and user authentication. It is fully responsive and designed for both desktop and mobile users.

🔗 **Live Demo**: [https://e-comer-web-project.vercel.app](https://e-comer-web-project.vercel.app)

---

## 🚀 Features

- 🛒 **Product Catalog**: Browse a variety of electronic products with images, prices, and descriptions.
- 🛍️ **Shopping Cart**: Add, remove, and update quantities for products in the cart.
- 🔐 **User Authentication**: Sign in with a simple authentication form (no backend integration yet).
- 🎨 **Responsive Design**: Optimized layout for desktops, tablets, and mobile devices.
- ⚡ **Fast Performance**: Powered by Vite for fast development and build times.
- 🔄 **State Management**: Uses React Context API to manage cart and user state.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Deployment**: Vercel

---

## 📂 Project Structure

e-comer-web-project/
│── public/
│ └── index.html
│── src/
│ ├── components/ # Reusable UI components (Navbar, ProductCard, Footer, Cart)
│ ├── context/ # React Context for state management (Cart, Auth)
│ ├── pages/ # Main pages (Home, Product, Cart, SignIn)
│ ├── assets/ # Images, icons, logos
│ ├── App.jsx # Root component
│ └── main.jsx # App entry point
│
│── .gitignore
│── package.json
│── README.md
│── tailwind.config.js
│── vite.config.js
