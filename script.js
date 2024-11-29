// Form and Sections
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const registerRole = document.getElementById('register-role');
const dynamicFields = document.getElementById('dynamic-fields');

// Switch Between Login and Register
document.getElementById('switch-to-register').addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.classList.add('hidden');
  registerSection.classList.remove('hidden');
});

document.getElementById('switch-to-login').addEventListener('click', (e) => {
  e.preventDefault();
  registerSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
});

// Generate Fields Dynamically
registerRole.addEventListener('change', () => {
  dynamicFields.innerHTML = ''; // Clear existing fields
  const role = registerRole.value;

  if (role === 'user') {
    dynamicFields.innerHTML = `
      <label for="user-name">Name:</label>
      <input type="text" id="user-name" placeholder="Enter your name" required>
      
      <label for="user-email">Email:</label>
      <input type="email" id="user-email" placeholder="Enter your email" required>
      
      <label for="user-password">Password:</label>
      <input type="password" id="user-password" placeholder="Create a password" required>
      
      <label for="user-phone">Phone Number (optional):</label>
      <input type="tel" id="user-phone" placeholder="Enter your phone number">
      
      <label for="user-language">Preferred Language:</label>
      <select id="user-language">
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    `;
  } else if (role === 'company') {
    dynamicFields.innerHTML = `
      <label for="company-name">Company Name:</label>
      <input type="text" id="company-name" placeholder="Enter your company name" required>
      
      <label for="company-type">Company Type:</label>
      <select id="company-type" required>
        <option value="private">Private</option>
        <option value="public">Public</option>
        <option value="startup">Startup</option>
      </select>
      
      <label for="company-industry">Industry:</label>
      <input type="text" id="company-industry" placeholder="Enter your industry" required>
      
      <label for="company-email">Email:</label>
      <input type="email" id="company-email" placeholder="Enter your email" required>
      
      <label for="company-password">Password:</label>
      <input type="password" id="company-password" placeholder="Create a password" required>
      
      <label for="company-phone">Phone Number:</label>
      <input type="tel" id="company-phone" placeholder="Enter your phone number" required>
    `;
  }
});

// Handle Form Submission
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const role = registerRole.value;
  const data = new FormData(e.target);
  console.log(`Registering as ${role}:`, Object.fromEntries(data.entries()));

  // Store data (mock example)
  localStorage.setItem(role, JSON.stringify(Object.fromEntries(data.entries())));
  alert(`${role} registered successfully!`);
});