# Student Registration System

A modern React application demonstrating component-based architecture and React Hooks for managing form state.

## Project Overview

This is a **Week 6** assignment project that implements a Student Registration System using:
- **React Components**: Parent (App.jsx) and Child (RegistrationForm.jsx) components
- **React Hooks**: useState hook for state management
- **Vite**: Fast build tool and development server
- **Modern CSS**: Responsive design with gradient styling

## Features

✨ **Component-Based Architecture**
- Parent component (App.jsx) manages the overall structure
- Child component (RegistrationForm.jsx) handles the registration form logic

🎣 **React Hooks**
- Uses `useState()` hook to manage form inputs:
  - `name` - Student name
  - `email` - Student email
  - `course` - Course selection

📱 **Responsive Design**
- Mobile-friendly interface
- Beautiful gradient background
- Smooth animations and transitions

✅ **Form Validation**
- Ensures all fields are filled before submission
- Displays success/error messages
- Auto-resets form after successful registration

## Project Structure

```
registration-app/
├── src/
│   ├── components/
│   │   └── RegistrationForm.jsx    # Child component with form logic
│   ├── App.jsx                      # Parent component
│   ├── App.css                      # Component styling
│   ├── index.css                    # Global styles
│   └── main.jsx                     # React entry point
├── public/                          # Static assets
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies and scripts
└── .gitignore                       # Git ignore rules
```

## Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd registration-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The application will be available at `http://localhost:5173/`
   - The dev server will automatically reload when you make changes

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

## How to Use

1. **Fill in the form:**
   - Enter your name
   - Enter your email address
   - Enter your course name

2. **Submit the form:**
   - Click the "Register" button
   - A success message will appear with your details
   - The form will automatically reset

3. **Form Validation:**
   - All fields are required
   - Email must be in valid email format
   - Error message appears if any field is empty

## Component Details

### App.jsx
```javascript
- Main/Parent Component
- Renders the header, main content, and footer
- Imports and displays RegistrationForm component
```

### RegistrationForm.jsx
```javascript
- Child Component
- Manages form state using React Hooks (useState)
- Handles form submission and validation
- Displays success/error messages
```

## React Hooks Used

### useState()
```javascript
const [name, setName] = useState("");
// name: current value
// setName: function to update the value
// "": initial value
```

This hook allows functional components to:
- Store and manage state
- Update state when user interacts with the form
- Re-render component when state changes

## Styling Features

- **Gradient Background**: Purple to violet gradient
- **Card Design**: White form container with shadow effect
- **Hover Effects**: Interactive buttons with smooth transitions
- **Animations**: Slide-in animation for success messages
- **Responsive**: Works great on mobile, tablet, and desktop

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port already in use?
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies not installing?
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Changes not reflecting?
- Make sure the dev server is running
- Try refreshing the browser page
- Check browser console for errors

## Learning Outcomes

After completing this project, you'll understand:
- ✅ React component hierarchy (parent-child components)
- ✅ Functional components and React Hooks
- ✅ State management with useState
- ✅ Event handling in React
- ✅ Form handling and validation
- ✅ Conditional rendering
- ✅ CSS styling in React applications
- ✅ Building modern UI with Vite

## Next Steps

Try enhancing the project with:
- Add more form fields (phone, date of birth, etc.)
- Store registrations in localStorage
- Add form validation for email format
- Create a list of registered students
- Add edit/delete functionality
- Use useEffect for side effects
- Implement custom hooks

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Hooks Guide](https://react.dev/reference/react)
- [JavaScript ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

---

**Assignment**: Week 6 - Design and Implementation of a Registration System using React Component Model and Hooks.

Made with ❤️ using React & Vite
