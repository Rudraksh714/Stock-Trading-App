# Equinox Trade

A full-stack stock trading platform built with **React, Node.js, Express, and MongoDB**. The project provides a modern trading dashboard with authentication, watchlists, orders, holdings, positions, and funds management.

https://stock-trading-app-rho.vercel.app/

## 🚀 Features

* User signup & login
* Secure JWT-based authentication
* Stock watchlist
* Buy & sell orders
* Holdings management
* Positions tracking
* Funds management
* Responsive fintech dashboard
* REST API with Node.js & Express
* MongoDB database integration

## 🛠️ Tech Stack

**Frontend**

* React
* React Router
* Axios
* Bootstrap / Material UI

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

## 📁 Project Structure

```text
Stock-Trading-App/
├── frontend/     # Landing page, signup & login
├── dashboard/    # Trading dashboard
└── backend/      # Express REST API & MongoDB
```

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Rudraksh714/Stock-Trading-App.git
cd Stock-Trading-App
```

### 2. Install dependencies

```bash
cd frontend
npm install

cd ../dashboard
npm install

cd ../backend
npm install
```

### 3. Environment Variables

Create `.env` files with your required configuration:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
```

For the React applications:

```env
REACT_APP_API_URL=http://localhost:3002
```

### 4. Start the applications

**Backend**

```bash
cd backend
node index.js
```

**Frontend**

```bash
cd frontend
npm start
```

**Dashboard**

```bash
cd dashboard
npm start
```

## 🌐 Deployment

* Frontend: Vercel
* Dashboard: Vercel
* Backend: Render
* Database: MongoDB Atlas

## 📌 Note

This project is built for **educational and demonstration purposes** and does not execute real stock-market trades.

## 👨‍💻 Author

**Rudraksh Mishra**

GitHub: [Rudraksh714](https://github.com/Rudraksh714?utm_source=chatgpt.com)
