# Electronics E-Shop

A full-stack electronics e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This was one of my early projects during my MERN stack learning phase. 100% hand-written code, no AI involved.

**Live Link:** <https://simple-eshop-8c4b3.web.app/>

## Features

- **Brand Browsing:** Browse electronics brands with a carousel banner and brand cards
- **Product Listings:** View products filtered by brand with image slideshows
- **Product Details:** View full product info and add items to cart
- **Shopping Cart:** See cart contents with total cost calculation
- **Add/Edit Products:** Add new products or update existing ones via forms
- **Authentication:** Email/password registration and login, plus Google sign-in via Firebase Auth
- **Dark/Light Mode:** Toggle between themes
- **Responsive Design:** Works on mobile, tablet, and desktop

## Tech Stack

**Frontend:**

- React 18
- Vite
- Tailwind CSS + DaisyUI
- React Router DOM v6
- Firebase Auth
- React Slick (carousel)
- React Slideshow Image
- SweetAlert2 (notifications)

**Backend:**

- Express.js
- MongoDB (via MongoDB Node.js Driver)
- CORS
- dotenv

**Deployment:**

- Frontend: Firebase Hosting
- Backend: Vercel

## Project Structure

```
Electronics-Eshop/
├── electronics-eshop-client/       # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/                 # Images and icons
│   │   ├── Component/
│   │   │   ├── AddProduct/         # Add product form
│   │   │   ├── HomePage/           # Home, Banner, Brands, Products, Services
│   │   │   ├── Login&Registration/ # Auth pages
│   │   │   ├── MyCart/             # Cart pages
│   │   │   ├── Navbar & Footer/    # Layout components
│   │   │   └── ViewProductDetails/ # Product details & update
│   │   ├── contextProvider/        # Auth context (AuthProvider)
│   │   ├── Firebase/               # Firebase config
│   │   ├── Routes/                 # Router and private route
│   │   └── Root/                   # Root layout
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── electronics-eshop-server/       # Express backend
│   ├── index.js                    # API routes and MongoDB connection
│   ├── package.json
│   └── vercel.json
│
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update a product |
| GET | `/users` | Get all users |
| GET | `/users/:email` | Get user by email |
| POST | `/users` | Register a new user |
| PUT | `/users/:email` | Add item to user cart |
| GET | `/brands` | Get all brands |

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account (or local MongoDB)

### Frontend Setup

```bash
cd electronics-eshop-client
npm install
npm run dev
```

### Backend Setup

```bash
cd electronics-eshop-server
npm install
```

Create a `.env` file in `electronics-eshop-server/` with:

```
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=3000
```

Then run:

```bash
npm start
```

## Environment Variables

**Frontend (Firebase):** Configured in `src/Firebase/firebase.config.js`

**Backend (.env):**

- `DB_USER` - MongoDB Atlas username
- `DB_PASS` - MongoDB Atlas password
- `PORT` - Server port (default: 3000)

## What I Learned

- Building REST APIs with Express.js and MongoDB
- React component structure and state management with Context API
- Firebase Authentication (email/password + Google OAuth)
- Protected/private routes using React Router
- CRUD operations (Create, Read, Update, Delete)
- Responsive design with Tailwind CSS
- Deploying frontend to Firebase Hosting and backend to Vercel
