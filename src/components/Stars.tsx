import React, { useEffect } from 'react';

const Stars = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      return star;
    };

    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
      for (let i = 0; i < 200; i++) {
        starsContainer.appendChild(createStar());
      }
    }

    return () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    };
  }, []);

  return <div className="stars-container" />;
};

export default Stars;