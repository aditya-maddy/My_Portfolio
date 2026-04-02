import React from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <Toaster position="top-right" />
        
        <main className="flex-grow">
          <HomePage />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;