function Home({ booksCount }) {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Library Portal</h1>
        <p className="subtitle">Manage your library books with ease</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>Total Books</h3>
            <p className="stat-number">{booksCount}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">➕</div>
          <div className="stat-content">
            <h3>Add New</h3>
            <p className="stat-description">Add books to library</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔍</div>
          <div className="stat-content">
            <h3>Browse</h3>
            <p className="stat-description">View all library books</p>
          </div>
        </div>
      </div>

      <section className="features-section">
        <h2>📋 Library Management Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🏠 Easy Navigation</h3>
            <p>Navigate between pages without reloading the browser using SPA routing with React Router.</p>
          </div>
          <div className="feature-card">
            <h3>📝 Controlled Forms</h3>
            <p>Add new books with controlled form inputs for complete control over form state.</p>
          </div>
          <div className="feature-card">
            <h3>♿ Accessible Design</h3>
            <p>Built with accessibility in mind using proper labels, aria-labels, and semantic HTML.</p>
          </div>
          <div className="feature-card">
            <h3>🔧 State Management</h3>
            <p>Manage books using React Hooks (useState) for efficient state management.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Works seamlessly across all devices - desktop, tablet, and mobile.</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Modern UI</h3>
            <p>Beautiful, intuitive interface with smooth transitions and animations.</p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>📖 About Library Management System</h2>
        <p>
          This Library Management System is a Single Page Application (SPA) that allows librarians and staff to:
        </p>
        <ul className="info-list">
          <li>✅ Add new books to the library database</li>
          <li>✅ View all books in the library</li>
          <li>✅ Remove books from the library</li>
          <li>✅ Navigate between pages without page reloads</li>
          <li>✅ Access the system from any device</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
