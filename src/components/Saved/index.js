import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './index.css';

function Saved() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../../animation/saved.json'),
    });
    
    return () => {
      anim.destroy();
    };
  }, []); 
  
  return (
    <div  className="saved-container">
      <div ref={container}></div>
    </div>
  );
}

export default Saved;
