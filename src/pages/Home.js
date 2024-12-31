import React from 'react';

function Home(){
    return (
      <>
        <div className="relative bg-[url('./da.webp')] bg-contain bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="relative text-2xl text-white flex justify-start pl-20 py-52">
          <p className="text-4xl font-semibold">
            Ergonomics made easy.
          </p>
        </div>
      </div>
        
      </>
    );
  }

export default Home;