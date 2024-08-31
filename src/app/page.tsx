'use client'

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import HomeComponent from './components/Home';
import ShopComponent from './components/Shop';
import { Element, animateScroll as scroll } from 'react-scroll';
import { BiArrowToTop } from 'react-icons/bi';
import OurProductComponent from './components/OurProducts';

const HomePage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeHeight = document.getElementById('home')?.offsetHeight || 0;

      if (scrollPosition > homeHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  return (
    <div className='grid'>
      <Navbar />
      
      <div className=''>
        <Element name="/" id="/" className='bg-white'>
          <HomeComponent />
        </Element>
        <Element name="shop">
          <ShopComponent />
        </Element>
        <Element name="our_product">
          <OurProductComponent />
        </Element>

        {showScrollToTop && (
          <div className="fixed bottom-12 right-24 z-50">
            <button
              onClick={scrollToTop}
              className="
                bg-primary 
                p-2.5 
                rounded-full 
                shadow-lg 
                hover:bg-secondary-dark 
                transition 
                duration-300
              "
              aria-label="Scroll to top"
            >
              <BiArrowToTop size={24} className="text-white" />
            </button>
          </div>
        )}


      </div>
    </div>
  )
}

export default HomePage