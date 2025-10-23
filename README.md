# 🌦️ Full Stack Weather App

A full-stack weather application built using **React (frontend)** and **Node.js + Express (backend)** that displays real-time weather data for selected cities using the **OpenWeatherMap API**.

Users can select cities from a dropdown menu to view current weather conditions such as temperature, humidity, wind speed, and descriptive icons (☀️ 🌧️ 🌩️ ❄️).

---

## 📸 Demo Preview

> *(Add your screenshot or Netlify/Vercel live demo link here once deployed)*
> Example:
> ![Weather App Screenshot](./screenshot.png)

---

## 🚀 Features

✅ Real-time weather data from OpenWeatherMap API
✅ Dropdown list for quick city selection
✅ Dynamic weather icons (☀️, ☁️, 🌧️, ❄️, etc.)
✅ Responsive and clean UI
✅ Full-stack structure (frontend + backend)
✅ Secure `.env` for API keys
✅ Extendable — add favorites, search history, or geolocation

---

## 🧱 Project Structure

```
weather-app/
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   └── package.json
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* HTML5
* CSS3
* Axios (for HTTP requests)

### Backend:

* Node.js
* Express.js
* Axios
* dotenv (for environment variables)
* CORS

### API:

* [OpenWeatherMap API](https://openweathermap.org/api)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/fullstack-weather-app.git
cd fullstack-weather-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key_here
```

Run the backend:

```bash
node server.js
```

Server will run at 👉 [http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Frontend will run at 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌐 Usage

1. Choose a city from the dropdown.
2. Click **“Get Weather”**.
3. View:

   * City name
   * Current temperature (°C)
   * Weather description
   * Wind speed, humidity, and feels-like temperature
   * Matching emoji icon 🌤️

---

## 🗝️ Environment Variables

Your `.env` file in `backend` should include:

```
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key
```

> ⚠️ Do **NOT** share this file or push it to GitHub.
> Your `.gitignore` already protects it.

---

## 📦 Example API Response

```json
{
  "coord": {"lon":78.47,"lat":17.38},
  "weather":[{"main":"Clouds","description":"broken clouds"}],
  "main":{"temp":28.4,"feels_like":31.2,"humidity":60},
  "wind":{"speed":4.5},
  "name":"Hyderabad"
}
```

---

## 🔒 Security Notes

* Never expose your API key in frontend code.
* Always store it in a `.env` file on the backend.
* For production deployment (Render, Vercel, Netlify), use their built-in **Environment Variables** section.

---

## ☁️ Deployment Guide

### Backend:

Deploy your **Node.js API** on:

* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [Vercel](https://vercel.com/)

### Frontend:

Deploy your **React app** on:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)

Make sure your frontend `axios` URL points to the deployed backend API.

---

## 🧩 Future Enhancements

* 🌍 Auto-detect user location (Geolocation API)
* ⭐ Save favorite cities (MongoDB integration)
* ⏳ Add loading animation
* 📊 Weekly weather forecast view

---

## 👨‍💻 Author

**Indrasena Reddy**
