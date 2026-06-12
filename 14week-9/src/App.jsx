import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import "./App.css";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>📚 Library Management System</h1>
          <p>Manage your library books efficiently</p>
        </div>
      </header>

      <nav className="navbar">
        <div className="nav-container">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            aria-label="Navigate to Home page"
          >
            🏠 Home
          </Link>
          <Link 
            to="/addbook" 
            className={`nav-link ${location.pathname === "/addbook" ? "active" : ""}`}
            aria-label="Navigate to Add Book page"
          >
            ➕ Add Book
          </Link>
          <Link 
            to="/booklist" 
            className={`nav-link ${location.pathname === "/booklist" ? "active" : ""}`}
            aria-label="Navigate to Book List page"
          >
            📖 Book List ({books.length})
          </Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home booksCount={books.length} />} />
          <Route 
            path="/addbook" 
            element={<AddBook onAddBook={addBook} />} 
          />
          <Route 
            path="/booklist" 
            element={<BookList books={books} onDeleteBook={deleteBook} />} 
          />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Library Management System | Built with React & React Router</p>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
