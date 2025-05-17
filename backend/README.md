# 🔧 Clicket Backend

This is the **backend** of Clicket, built with:

- **Node.js** & **Express.js** (TypeScript)
- **MongoDB** (via Mongoose)
- **JWT Authentication**
- **Role-Based Access Control (RBAC)**
- **Image Uploads** are handled using [Cloudinary](https://cloudinary.com/)

## 🚀 Features

- RESTful API for event management
- Admin/User roles
- JWT-based authentication
- Feature-based scalable architecture

## 🧰 Tech Stack

- Node.js + Express (TypeScript)
- MongoDB + Mongoose
- JWT Auth
- Dotenv
- Class-based controllers

## ⚙️ Setup Instructions

1. Clone the repository and go to the backend folder:

   ```bash
    git clone https://github.com/your-username/clicket.git
    cd clicket/backend
    npm install

#Create a .env file and add
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

   ```bash
       npm run dev
   ```

## 📁 Backend Project Structure
```
src/
├── config/        # Configuration files (e.g., DB, environment)
├── controllers/   # Logic for handling requests and responses
├── middlewares/   # Custom Express middlewares (e.g., auth, error handler)
├── models/        # Mongoose schemas and models
├── routes/        # Route definitions for different resources
├── utils/         # Utility functions and helpers
└── index.ts       # Entry point of the Express server
```




