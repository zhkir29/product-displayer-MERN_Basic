# product-displayer-MERN_Basic
A full-stack web application built with React, Node.js, Express.js, and MongoDB. The application features a React frontend (using Axios for HTTP requests) and a Node.js backend, allowing data retrieval via API integrated with MongoDB and follows modern development practices.

## Features
- **Frontend**: Built with React, Axios, and styled with HTML and CSS.
- **Backend**: Node.js and Express.js for handling routes and APIs.
- **Database**: MongoDB for storing product data.
- **Cross-Origin Requests**: Handled using the `cors` package.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript, React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Packages Used**: `npm`, `cors`, `dotenv`, `express`, `react`, `react-router-dom`

### Prerequisites
- Node.js (>=16.x)
- npm (or Yarn, based on preference)
- MongoDB server running locally or a MongoDB Atlas connection string

---

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
2. Install dependencies 
    ```bash
    npm install
3. Start the App
    ```bash
    npm start
4. The app will run on http://localhost:3000.


### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
2. Install dependencies
    ```bash
    npm install
3. Configure the database connection: 
   create ```.env file and add your MongoDB connection string: 
   ```bash
   MONGO_URI=mongodb://localhost:27017/test
   PORT=5000
4. Start the backend Sever
    ```bash
    node index.js
5. The backend server will run on http://localhost:5000

API Routes
GET /products: Fetch all products from the database.

Running the Full Project
    Start the backend server (node index.js) in one terminal.
    Start the frontend React app (npm start) in another terminal.
    Access the app at http://localhost:3000.


Project Structure
 ```bash
    /frontend  # React frontend files
    /backend   # Node.js backend files
    /docs      # Documentation and license files

Contribution
Contributions are welcome! Follow the steps below:

Fork the repository.
Create a new branch (git checkout -b feature-branch-name).
Commit changes (git commit -m 'Add some feature').
Push the branch (git push origin feature-branch-name).
Open a Pull Request.
