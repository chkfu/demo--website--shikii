// from package
import React, { createContext, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import store from './../redux/configureStore';
import { Provider } from 'react-redux';
// from components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTopButton';
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
import UserProfile from './components/UserPanel.jsx';

// package settings
export const ResponsiveContext = createContext();
export const UserLoginContext = createContext();
export const queryClient = new QueryClient();

// render
function App() {

  // responsive design
  const screenWidth = useResponsiveHook();

  // hook
  const scrollRef = useRef();

  const scrollHandler = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // render

  return (
    <Provider store={ store }>

      <ResponsiveContext.Provider value={ screenWidth }>
        <QueryClientProvider client={ queryClient }>

          <nav ref={ scrollRef }>
            <Navbar />
          </nav>

          <main>

            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/explore'>
                <Route index element={ <Explore /> } />
                <Route path=':id' element={ <ProductLayout /> } />
              </Route>
              <Route path='/FAQ' element={ <FAQ /> } />
              <Route path='/features' element={ <Features /> } />
              <Route path='/forgotPassword' element={ <ForgotPassword /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/news' element={ <News /> } />
              <Route path='/search' element={ <Search /> } />
              <Route path='/testingAnnouncement' element={ <TestingAnnouncement /> } />
              <Route path='/user-profile' element={ <UserProfile /> } />
              <Route path='*' element={ <ErrorPage /> } />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>

          <div>
            <ScrollToTop scrollHandler={ scrollHandler } />
          </div>

        </QueryClientProvider>
      </ResponsiveContext.Provider>
    </Provider>
  );
}

export default App;