import React from 'react';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Welcome to Bright Start Tutoring
          </h1>
          <p className="text-center text-gray-600">
            Empowering the next generation of developers!
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
