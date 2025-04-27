This project is a MERN (MongoDB, Express, React, Node.js) stack application for managing a collection of books. It consists of a backend for handling API requests and a frontend for providing a user interface. Here's a breakdown of the project:
**Backend**
The backend is built with Node.js, Express, and MongoDB. It provides a RESTful API for managing books.
Key Features:
1. API Endpoints:
  POST /books: Create a new book.
  GET /books: Fetch all books.
  GET /books/:id: Fetch a specific book by ID.
  PUT /books/:id: Update a book by ID.
  DELETE /books/:id: Delete a book by ID.
2. Database:
  Uses MongoDB to store book data.
  The schema is defined in bookModel.js, which includes fields like title, author, publishYear, and timestamp.
3 .Routing:
  Routes are defined in booksRoute.js and imported into index.js.
  Configuration:
  The backend uses environment variables for configuration, such as the PORT and MONGODB_URI, defined in config.js.
4 .CORS:
  Configured to allow requests from the frontend running on http://localhost:5173.
  
Backend Dependencies:
  express: For building the API.
  mongoose: For interacting with MongoDB.
  cors: For handling cross-origin requests.

**Frontend**
The frontend is built with React and uses Vite as the build tool. It provides a user interface for interacting with the backend API.
Key Features:
1. Pages:
  Home: Displays a list of books with options to view, edit, or delete.
  CreateBook: Form to add a new book.
  EditBook: Form to edit an existing book.
  ShowBook: Displays details of a specific book.
  DeleteBook: Confirmation page for deleting a book.
2. Routing:
  Uses react-router-dom for navigation between pages.
  Routes are defined in App.jsx.
3. Components:
  BackButton: A reusable button for navigating back.
  Spinner: A loading indicator.
4. Styling:
  Uses Tailwind CSS for styling, configured in index.css.
5. API Integration:
  Uses axios to make HTTP requests to the backend API.

Frontend Dependencies:
react, react-dom: For building the UI.
react-router-dom: For routing.
axios: For making HTTP requests.
tailwindcss: For styling.

**How to Run the Project
**
Backend:
Navigate to the backend folder.
Install dependencies: npm install.
Start the server: npm run dev.

Frontend:
Navigate to the frontend folder.
Install dependencies: npm install.
Start the development server: npm run dev.
