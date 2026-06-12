# Student Management System

A React application demonstrating **state management concepts** including Lifting State Up, Context API, and Component Patterns.

## Features

- **Add Students**: Input form to add new students to the system
- **Display Student List**: Shows all added students in a list
- **State Management**: Uses React Context API to manage global state
- **Lifting State**: Parent component (`App.jsx`) manages state for child components

## Project Structure

```
src/
├── App.jsx                 # Main app component (state provider)
├── App.css                 # Application styles
├── StudentContext.jsx      # Context definition
├── components/
│   ├── StudentForm.jsx     # Form component for adding students
│   └── StudentList.jsx     # List component for displaying students
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Concepts Implemented

### 1. **Lifting State Up**
- State is maintained in the parent component (`App.jsx`)
- State is passed down to child components as props
- This ensures a single source of truth for the data

### 2. **Context API**
- `StudentContext` is created using `createContext()`
- `App.jsx` provides the context with `<StudentContext.Provider>`
- Child components consume the context using `useContext(StudentContext)`

### 3. **Component Pattern**
- **StudentForm**: Handles user input and adds students
- **StudentList**: Displays the current list of students
- **App**: Acts as the central controller and state provider

## Program Flow

1. User enters a student name in the input field
2. Clicks the **Add** button
3. State updates in `App.jsx`
4. Context API shares the updated state
5. `StudentList` automatically re-renders
6. New student appears in the list

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## Building for Production

```bash
npm run build
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling

## Learning Outcomes

This project demonstrates:
- How to manage shared state across multiple components
- Using React Context API for state management
- Component composition and reusability
- React hooks (`useState`, `useContext`)

## Author

Created as part of the React State Architecture course (Week 7)
