import { state, subscribe } from "./state.js";
import { render } from "./renderer.js";
import { EmployeeList } from "./components/EmployeeList.js";
import "./components/Controls.js";

// This is the target <div> from your index.html
const root = document.getElementById("app");

/**
 * Main App Component
 * This function returns the entire HTML structure. 
 * By putting the title and buttons here, we prevent duplication 
 * because the renderer clears the screen before each update.
 */
function App() {
  return `
    <div class="container">
      <h1 class="title">Employee Performance Dashboard</h1>

      <img src="employee-photo.jpg" alt="Dashboard Logo" class="dashboard-image">

      <div class="btn-group">
        <button onclick="window.addEmployee()"> Add Employee</button>
        <button onclick="window.updateScore()">⬆ Update Score</button>
        <button onclick="window.downloadPDF()"> Download PDF</button>
      </div>

      <input type="text" 
             class="search-box" 
             placeholder="Search Employee..." 
             oninput="window.searchEmployee(this.value)">

      ${EmployeeList(state.employees)}
    </div>
  `;
}

/**
 * Update UI Function
 * This follows the Unidirectional Data Flow: 
 * State Changes -> updateUI triggers -> renderer updates DOM
 */
function updateUI() {
  render(App(), root);
}

// Subscribe to state changes
subscribe(updateUI);

// Initial Render
updateUI();