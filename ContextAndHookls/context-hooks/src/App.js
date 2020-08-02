import React from 'react';
import Navbar from './components/navbar';
import SongList from './components/song-list';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import SongContextProvider from './contexts/SongContext';
import CreateSongForm from './components/create-song-form';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>

        <AuthContextProvider>

          <SongContextProvider>

            <Navbar />
            <CreateSongForm />
            <SongList />

          </SongContextProvider>

        </AuthContextProvider>

      </ThemeContextProvider>

    </div>
  );
}

export default App;
