/* src/styles/App.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  background-color: #F5F5DC; /* light beige */
  color: #333;
  min-height: 100vh;
}

.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Global animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-in {
  animation: fadeIn -0.5s ease-in;
}

.slide-up {
  animation: slideUp 0.5s ease-out;
}

/* Button styles */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
}

.btn-primary {
  background-color: #FF9933; /* saffron */
  color: white;
}

.btn-primary:hover {
  background-color: #E6892E;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 153, 51, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: #FF9933;
  border: 2px solid #FF9933;
}

.btn-secondary:hover {
  background-color: #FF9933;
  color: white;
}

/* Card styles */
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

/* Responsive grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .content {
    padding: 15px;
  }
  
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
