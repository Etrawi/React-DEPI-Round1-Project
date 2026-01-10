import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Navbar Placeholder */}
      <nav style={{padding: '1rem', background: '#f8f9fa'}}>
        <h2>MediBook Navbar</h2>
      </nav>

      <Routes>
        <Route path="/" element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>Welcome to MediBook Home Page</h1>} />
        <Route path="/login" element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>Login Page</h1>} />
      </Routes>

      {/* Footer Placeholder */}
      <footer style={{padding: '1rem', background: '#343a40', color: 'white', marginTop: '50px'}}>
        <p>MediBook Footer</p>
      </footer>
    </div>
  );
}

export default App;