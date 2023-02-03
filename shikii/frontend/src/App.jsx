// from package
import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
// from components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useResponsiveHook } from './theme/useResponsiveHook';
// from scences
import Cart from './scenes/Cart';
import ErrorPage from './scenes/ErrorPage';
import Explore from './scenes/Explore';
import FAQ from './scenes/FAQ';
import Features from './scenes/Features';
import ForgotPassword from './scenes/ForgotPassword';
import Home from './scenes/Home';
import Login from './scenes/Login';
import News from './scenes/News';
import ProductLayout from './scenes/ProductLayout';
import Search from './scenes/Search';
import TestingAnnouncement from './scenes/TestingAnnouncement';

// package settings
export const ResponsiveContext = createContext();
export const queryClient = new QueryClient();

// render
function App() {
  const screenWidth = useResponsiveHook();

  return (
    <ResponsiveContext.Provider value={ screenWidth }>
      <QueryClientProvider client={ queryClient }>

        <nav>
          <Navbar />
        </nav>

        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/explores'>
              <Route index element={ <Explore /> } />
              <Route path=':id' element={ <ProductLayout /> } />
              <Route path='*' element={ <ErrorPage /> } />
            </Route>
            <Route path='/FAQ' element={ <FAQ /> } />
            <Route path='/features' element={ <Features /> } />
            <Route path='/forgotPassword' element={ <ForgotPassword /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/news' element={ <News /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/testingAnnouncement' element={ <TestingAnnouncement /> } />
            <Route path='*' element={ <ErrorPage /> } />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>

      </QueryClientProvider>
    </ResponsiveContext.Provider>
  );
}

export default App;