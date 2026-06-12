import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook({ onAddBook }) {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [genre, setGenre] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!bookTitle.trim() || !author.trim() || !isbn.trim()) {
      setMessageType("error");
      setMessage("❌ Please fill in all required fields!");
      return;
    }

    // ISBN validation (basic)
    if (isbn.length < 10) {
      setMessageType("error");
      setMessage("❌ ISBN must be at least 10 characters long!");
      return;
    }

    // Add book
    const newBook = {
      title: bookTitle,
      author: author,
      isbn: isbn,
      publishYear: publishYear || "Unknown",
      genre: genre || "General",
    };

    onAddBook(newBook);

    // Show success message
    setMessageType("success");
    setMessage(
      `✅ Book Added Successfully!\n"${bookTitle}" by ${author}\nISBN: ${isbn}`
    );

    // Reset form
    setBookTitle("");
    setAuthor("");
    setIsbn("");
    setPublishYear("");
    setGenre("");

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/booklist");
    }, 2000);
  };

  const handleReset = () => {
    setBookTitle("");
    setAuthor("");
    setIsbn("");
    setPublishYear("");
    setGenre("");
    setMessage("");
    setMessageType("");
  };

  return (
    <div className="addbook-container">
      <div className="form-header">
        <h2>➕ Add New Book</h2>
        <p>Fill in the details to add a new book to the library</p>
      </div>

      <form onSubmit={handleSubmit} className="addbook-form" noValidate>
        <fieldset>
          <legend>Book Information</legend>

          {/* Book Title Field */}
          <div className="form-group">
            <label htmlFor="title">
              Book Title <span className="required">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              placeholder="Enter book title"
              required
              aria-label="Book Title"
              aria-required="true"
              aria-describedby="title-help"
            />
            <small id="title-help">The full title of the book</small>
          </div>

          {/* Author Field */}
          <div className="form-group">
            <label htmlFor="author">
              Author <span className="required">*</span>
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              required
              aria-label="Author Name"
              aria-required="true"
              aria-describedby="author-help"
            />
            <small id="author-help">The name of the book author</small>
          </div>

          {/* ISBN Field */}
          <div className="form-group">
            <label htmlFor="isbn">
              ISBN <span className="required">*</span>
            </label>
            <input
              id="isbn"
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Enter ISBN (10 or 13 digits)"
              required
              aria-label="ISBN Number"
              aria-required="true"
              aria-describedby="isbn-help"
            />
            <small id="isbn-help">International Standard Book Number (ISBN)</small>
          </div>

          {/* Publish Year Field */}
          <div className="form-group">
            <label htmlFor="year">
              Publish Year <span className="optional">(Optional)</span>
            </label>
            <input
              id="year"
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              placeholder="e.g., 2024"
              min="1000"
              max={new Date().getFullYear()}
              aria-label="Publish Year"
              aria-describedby="year-help"
            />
            <small id="year-help">The year the book was published</small>
          </div>

          {/* Genre Field */}
          <div className="form-group">
            <label htmlFor="genre">
              Genre <span className="optional">(Optional)</span>
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              aria-label="Book Genre"
              aria-describedby="genre-help"
            >
              <option value="">Select a genre</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Technology">Technology</option>
              <option value="Biography">Biography</option>
              <option value="Self-Help">Self-Help</option>
              <option value="General">General</option>
            </select>
            <small id="genre-help">Select the book category</small>
          </div>
        </fieldset>

        {/* Message Display */}
        {message && (
          <div className={`message-box ${messageType}`} role="alert">
            <p>{message}</p>
          </div>
        )}

        {/* Form Buttons */}
        <div className="form-buttons">
          <button 
            type="submit" 
            className="submit-btn"
            aria-label="Submit form to add book"
          >
            📚 Add Book
          </button>
          <button 
            type="reset" 
            className="reset-btn"
            onClick={handleReset}
            aria-label="Clear form fields"
          >
            🔄 Clear Form
          </button>
        </div>
      </form>

      {/* Form Instructions */}
      <section className="form-info">
        <h3>📝 Form Instructions</h3>
        <ul>
          <li><strong>Book Title:</strong> Enter the full title of the book</li>
          <li><strong>Author:</strong> Enter the author's name</li>
          <li><strong>ISBN:</strong> Enter the 10 or 13 digit ISBN</li>
          <li><strong>Publish Year:</strong> Optional - year the book was published</li>
          <li><strong>Genre:</strong> Optional - select from predefined genres</li>
        </ul>
      </section>
    </div>
  );
}

export default AddBook;
