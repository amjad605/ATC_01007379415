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

## Create a .env file and add
```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME =your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

```
   ```bash
       npm run dev
   ```

## 📁 Backend Project Structure
```
src/
├── auth/
├── bookings/   
├── events/  
├── users/
├── utils/        
├── appRouter.ts        
└── index.ts       
```




