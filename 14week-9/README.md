# Library Management System

A modern React application demonstrating SPA routing, controlled forms, and accessibility engineering. This system allows librarians to efficiently manage library books with a user-friendly interface.

## 📚 Project Overview

This is a **Week 9** assignment project that implements a Library Management System using:
- **SPA Routing**: Single Page Application using React Router
- **Controlled Forms**: Form state management with React Hooks
- **Accessibility Engineering**: WCAG 2.1 compliant accessible UI
- **React Router DOM**: Client-side routing without page reloads
- **React Hooks**: useState for component state management
- **Modern CSS**: Responsive design with beautiful styling

## ✨ Key Features

🧭 **SPA Routing**
- Navigate between pages without page reloads
- Fast, smooth navigation experience
- Active route highlighting in navigation

📝 **Controlled Forms**
- Complete form state management with React Hooks
- Controlled inputs for accurate data handling
- Form validation and error handling
- Auto-reset after successful submission

♿ **Accessibility Features**
- Semantic HTML structure
- Proper label associations with inputs
- ARIA labels and descriptions
- Focus management
- Color contrast compliance
- Keyboard navigation support
- Skip-to-main-content link

📚 **Library Management**
- Add new books with complete details
- View all books in library
- Delete books from library
- Real-time book count update
- Book statistics and analytics

📱 **Responsive Design**
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface
- Beautiful gradient styling

## 📁 Project Structure

```
week-9/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Home/Welcome page
│   │   ├── AddBook.jsx           # Form to add books
│   │   └── BookList.jsx          # Display all books
│   ├── App.jsx                   # Main app with routing
│   ├── App.css                   # Component styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies and scripts
├── .gitignore                    # Git configuration
├── README.md                     # This file
└── QUICKSTART.md                 # Quick start guide
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Steps

1. **Navigate to project directory:**
   ```bash
   cd week-9
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Visit `http://localhost:5173/`
   - The app will automatically reload when you make changes

## 💻 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

## 🎓 How to Use

### Home Page
- View welcome message
- See library statistics
- Learn about system features
- Quick navigation to other pages

### Add Book Page
1. Fill in book details:
   - **Book Title** (required)
   - **Author** (required)
   - **ISBN** (required)
   - **Publish Year** (optional)
   - **Genre** (optional)

2. Click "Add Book" to submit form
3. Success message appears
4. Form auto-resets
5. Redirected to Book List

### Book List Page
- View all added books
- See book details (title, author, ISBN, year, genre)
- Delete books with delete button
- View library statistics
- See unique authors and genres count

## 🔌 React Router Setup

### Routes Implemented
```
/ → Home component (welcome page)
/addbook → AddBook component (form)
/booklist → BookList component (display books)
```

### Navigation
- Using React Router's `<Link>` component
- Client-side navigation without page reload
- Active route highlighting
- Accessible navigation with aria-labels

## 📝 Controlled Forms Explained

### How Controlled Forms Work
```javascript
const [bookTitle, setBookTitle] = useState("");

return (
  <input
    value={bookTitle}
    onChange={(e) => setBookTitle(e.target.value)}
  />
);
```

### Benefits
- React controls form state
- Form values available anytime
- Validation in real-time
- Clear data flow

## ♿ Accessibility Features

### HTML Semantic Structure
```html
<form>
  <fieldset>
    <legend>Book Information</legend>
    <label htmlFor="title">Book Title</label>
    <input id="title" aria-label="Book Title" />
  </fieldset>
</form>
```

### Accessibility Attributes
- `htmlFor` - Links labels to inputs
- `aria-label` - Descriptive labels for screen readers
- `aria-required` - Indicates required fields
- `aria-describedby` - Links to helper text
- `role` - Defines element roles
- Keyboard navigation support

### Focus Management
- Clear focus states
- Keyboard accessible buttons
- Tab navigation order
- Focus visible styling

## 🎨 Styling Highlights

### Color Scheme
- Primary: Purple (#667eea) to Violet (#764ba2) gradient
- Secondary: White backgrounds
- Accent: Red (#e74c3c) for delete actions

### Layout
- CSS Grid for responsive layouts
- Flexbox for component alignment
- Mobile-first responsive design
- Smooth animations and transitions

### Components
- Beautiful cards with shadows
- Gradient navigation bar
- Interactive hover effects
- Loading animations

## 🧪 Testing Scenarios

### Test 1: Add Book
1. Navigate to "Add Book" page
2. Fill in all required fields
3. Click "Add Book"
4. Verify success message
5. Check Book List page shows new book

### Test 2: Navigation
1. Use navigation links
2. Verify page changes without reload
3. Check active link highlighting
4. Verify book count updates

### Test 3: Form Validation
1. Try submitting empty form
2. See error message
3. Fill in required fields
4. Submit successfully

### Test 4: Accessibility
1. Use Tab key to navigate
2. Use Enter to activate buttons
3. Enable screen reader (NVDA/JAWS)
4. Verify proper announcements

### Test 5: Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar
3. Test on mobile (375px)
4. Test on tablet (768px)
5. Test on desktop (1200px)

## 📚 Learning Outcomes

After completing this project, you'll understand:
- ✅ SPA routing with React Router
- ✅ Client-side navigation patterns
- ✅ Controlled form components
- ✅ Form validation and submission
- ✅ Accessibility best practices (WCAG 2.1)
- ✅ Semantic HTML structure
- ✅ ARIA attributes and roles
- ✅ Component composition
- ✅ State management with Hooks
- ✅ CSS Grid and Flexbox layouts
- ✅ Responsive design techniques
- ✅ React Router navigation

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5173 busy | Vite will use next available port |
| Module not found | Run `npm install` again |
| React Router errors | Ensure `react-router-dom` is installed |
| Form not submitting | Check browser console for errors |
| Changes not showing | Hard refresh (Ctrl+Shift+R) |

## 🚀 Enhancement Ideas

### Easy Enhancements
1. Add book search functionality
2. Sort books by title or author
3. Add book cover images
4. Add publication date display
5. Add book ratings

### Medium Enhancements
1. Store books in localStorage
2. Add book editing functionality
3. Add advanced filtering
4. Import/export book list
5. Add dark mode toggle

### Advanced Enhancements
1. Backend API integration
2. Database for persistent storage
3. User authentication
4. Advanced search with filters
5. Book recommendations

## 📄 Dependencies

### Production
- `react@^18.2.0` - React library
- `react-dom@^18.2.0` - React DOM
- `react-router-dom@^6.20.0` - Routing library

### Development
- `vite@^5.0.8` - Build tool
- `@vitejs/plugin-react@^4.2.1` - React plugin
- `@types/react` - TypeScript types
- `@types/react-dom` - TypeScript types

## 📚 Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Web Accessibility by WebAIM](https://webaim.org/)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## ✅ Checklist for Accessibility

- [x] Semantic HTML elements
- [x] Form labels properly associated
- [x] ARIA attributes used correctly
- [x] Keyboard navigation support
- [x] Color contrast compliance
- [x] Focus indicators visible
- [x] Alt text for images (if any)
- [x] Skip navigation link
- [x] Proper heading hierarchy
- [x] Accessible forms

## 📄 License

This project is created for educational purposes as part of Week 9 coursework.

---

**Assignment**: Week 9 - Implementation of Library Book Insertion System using SPA Routing, Controlled Forms and Accessibility Engineering in React.

Made with ❤️ using React, React Router & Vite
