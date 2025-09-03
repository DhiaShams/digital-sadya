import React from 'react';
import Header from './components/Header';
import SadyaPlate from './components/SadyaPlate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      <main className="py-8">
        <SadyaPlate />
      </main>
      <Footer />
    </div>
  );
}

export default App;