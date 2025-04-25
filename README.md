# 📊 Full Stack Dashboard App

A responsive and interactive full stack dashboard application built using the MERN stack with Vite + React on the frontend and Express + MongoDB on the backend.

---

## 🚀 Features

- User authentication (JWT-based)
- Drag-and-drop widgets using DnD Kit
- Responsive grid layout with React Grid Layout
- Chart visualizations using Recharts
- Reusable UI with DaisyUI and TailwindCSS
- Real-time toast notifications
- Modern development workflow with Vite and Zustand

---

## 🛠 Tech Stack

### Frontend:
- React 18 + Vite
- TailwindCSS + DaisyUI
- Zustand (State Management)
- React Grid Layout, Recharts
- DnD Kit (Drag-and-Drop)
- Axios, React Router DOM

### Backend:
- Node.js + Express
- MongoDB + Mongoose
- JWT Auth
- dotenv, cookie-parser, cors

---

## 📁 Project Structure

```
DASHBOARD_APP/
├── package.json                  # Root: handles full-stack scripts
├── Backend/
│   ├── package.json              # Backend dependencies
│   ├── src/
│   │   ├── index.js              # Entry point
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── lib/
│   └── .env                      # Environment variables
├── Frontend/
│   ├── package.json              # Frontend dependencies
│   ├── index.html
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css

```

---

## ⚙️ Installation & Setup

### Step 1: Clone and Install

```bash
git clone <your-repo-url>
cd DASHBOARD_APP
npm install
```

### Step 2: Create a `.env` File in `/Backend`

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
```

### Step 3: Run the App

```bash
npm run dev
```

This will run both frontend and backend concurrently (Vite + Nodemon).

---

## 🧪 API Routes (Auth)

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

---

## 📝 Scripts

From root directory:
```bash
npm install         # Installs both frontend & backend dependencies
npm run dev         # Runs frontend (Vite) and backend (Nodemon)
```

---

## 📌 Notes

- `.env` should be customized.
- `.gitignore` already excludes `node_modules` and sensitive files.

---

## 👨‍💻 Author

Developed by **Viraj** — Full Stack Developer in the making 💻

---

