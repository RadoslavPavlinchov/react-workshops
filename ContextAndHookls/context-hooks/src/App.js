import React from 'react';
import Navbar from './components/navbar';
import BookList from './components/book-list';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/theme-toggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>

        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>

      </ThemeContextProvider>

    </div>
  );
}

export default App;
