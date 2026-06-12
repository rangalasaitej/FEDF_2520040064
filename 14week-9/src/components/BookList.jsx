import { Link } from "react-router-dom";

function BookList({ books, onDeleteBook }) {
  return (
    <div className="booklist-container">
      <div className="list-header">
        <h2>📖 Library Books</h2>
        <p>Total Books: <strong>{books.length}</strong></p>
      </div>

      {books.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <h3>No Books Yet</h3>
          <p>The library doesn't have any books yet.</p>
          <p>Start by adding your first book!</p>
          <Link to="/addbook" className="cta-button">
            ➕ Add First Book
          </Link>
        </div>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="book-card"
              role="article"
              aria-label={`Book: ${book.title} by ${book.author}`}
            >
              <div className="book-icon">📕</div>
              
              <div className="book-content">
                <h3 className="book-title" title={book.title}>
                  {book.title}
                </h3>
                
                <p className="book-author">
                  <strong>Author:</strong> {book.author}
                </p>

                <div className="book-details">
                  <div className="detail-item">
                    <span className="detail-label">ISBN:</span>
                    <span className="detail-value">{book.isbn}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{book.publishYear}</span>
                  </div>

                  <div className="detail-item">
                    <span className="detail-label">Genre:</span>
                    <span className="genre-tag">{book.genre}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onDeleteBook(book.id)}
                className="delete-btn"
                aria-label={`Delete book: ${book.title}`}
                title="Remove this book from library"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {books.length > 0 && (
        <section className="library-stats">
          <h3>📊 Library Statistics</h3>
          <div className="stats-container">
            <div className="stat">
              <span className="stat-label">Total Books:</span>
              <span className="stat-value">{books.length}</span>
            </div>

            <div className="stat">
              <span className="stat-label">Unique Authors:</span>
              <span className="stat-value">
                {new Set(books.map(b => b.author)).size}
              </span>
            </div>

            <div className="stat">
              <span className="stat-label">Genres:</span>
              <span className="stat-value">
                {new Set(books.map(b => b.genre)).size}
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BookList;
