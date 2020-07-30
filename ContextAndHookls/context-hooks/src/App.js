import React from 'react';
import Navbar from './components/navbar';
import BookList from './components/book-list';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>

        <Navbar />
        <BookList />
        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
