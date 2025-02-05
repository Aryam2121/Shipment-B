# Shipment-B (Backend)

Shipment-B is the backend of the Cargo Shipment Tracker application, built using Node.js, Express, and MongoDB. It provides APIs for managing shipments, retrieving shipment data, and integrating with the frontend.

## 🚀 Features
- 📦 **Shipment Management** – Create, update, delete, and retrieve shipment details.
- 🔗 **RESTful API** – Exposes endpoints for seamless frontend integration.
- 🛡️ **Authentication (Future Enhancement)** – Secure access with authentication.
- ⚡ **Optimized Performance** – Uses Mongoose for efficient MongoDB interactions.

## 🛠️ Tech Stack
- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Cors & dotenv** – Middleware support
- **Nodemon** – Development monitoring

## 📥 Installation

Clone the repository:
```sh
git clone https://github.com/yourusername/shipment-b.git
cd shipment-b
```

Install dependencies:
```sh
npm install
```

Create a `.env` file in the root directory and add the following:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:
```sh
npm run dev
```

## 🚀 Deployment
### **Render Deployment**
```sh
git add .
git commit -m "Deploying to Render"
git push origin main
```

### **Vercel Deployment (Optional)**
```sh
npm install -g vercel
vercel
```

## 📜 API Endpoints

| Method | Endpoint              | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/shipments`     | Fetch all shipments     |
| GET    | `/api/shipments/:id` | Get a single shipment   |
| POST   | `/api/shipments`     | Create a new shipment   |
| PUT    | `/api/shipments/:id` | Update a shipment       |
| DELETE | `/api/shipments/:id` | Delete a shipment       |

## 📌 TODO (Future Enhancements)
- ✅ Implement user authentication
- ✅ Add WebSocket for real-time updates
- ✅ Optimize database queries for faster responses

## 🤝 Contributing
Contributions are welcome! Submit a pull request with your improvements.

## 📄 License
This project is licensed under the MIT License.
