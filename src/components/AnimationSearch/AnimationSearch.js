import React from 'react';
import Lottie from 'react-lottie';
import animation from './animation.json';

function AnimationSearch() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        // height={400}
        width={400}
        style={{ marginTop: '100px' }}
      />
    </div>
  );
}

export default AnimationSearch;
