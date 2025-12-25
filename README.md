# Shoppy-E - E-Commerce Shopping Platform

A full-featured e-commerce application built with React, featuring shopping cart management, product browsing, and checkout functionality.

## [View Live Demo](https://e-commerce-sigma-one-56.vercel.app/)

## Features

- **Shopping Cart System**: Add/remove products, update quantities, real-time price calculation
- **Product Catalog**: Browse products fetched from REST API with loading states
- **Product Details**: Individual product pages with dynamic routing
- **Checkout Flow**: Multi-step checkout with form validation and payment options
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **User Feedback**: Toast notifications for cart actions
- **Error Handling**: Graceful error states and loading indicators

## Technologies Used

- React 19
- React Router v7 (Multi-page navigation)
- Context API (Global state management)
- React Hot Toast (Notifications)
- Fake Store API (Product data)
- Vite (Build tool)
- Custom CSS (Responsive design)

## Technical Highlights

- **Context API** for cart state management across components
- **React Hooks** (useState, useEffect, useContext, useRef)
- **RESTful API integration** with async/await
- **Dynamic routing** with URL parameters
- **Component composition** patterns for reusability
- **Form validation** and controlled inputs

## Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/shoppy-e.git

# Navigate to directory
cd shoppy-e

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure
```
src/
├── components/     # Reusable components (Header, Footer, Hero)
├── Pages/         # Route components (Home, Products, Cart, Checkout)
├── context/       # Context API providers (CartProvider)
└── routes/        # React Router configuration
```

## What I Learned

- Managing complex state across multiple components with Context API
- Implementing protected routes and dynamic navigation
- Handling asynchronous data fetching with proper loading/error states
- Building reusable component architecture
- Form handling and validation in React
- Deploying React applications to Vercel

## Future Enhancements

- Add user authentication
- Implement local storage for cart persistence
- Add product search and filtering
- Integrate payment gateway

## License

MIT License
