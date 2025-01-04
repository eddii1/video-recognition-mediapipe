import React from 'react';
import {Button} from 'flowbite-react';
import { Link } from 'react-router-dom';


function Home(){
    return (
      <>
      <div className="relative bg-[url('./da.webp')] bg-contain bg-center">
          {/* Opacitate */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative text-white flex justify-start pl-32 py-52">
            <p className="text-4xl font-semibold">
              Ergonomics made easy
            </p>
          </div>

      </div>


{
  /*
pl-32 py-10 px-20 pr-32 
  */
}
      <div className="pl-32 py-10 px-20 w-full md:w-[60%]">
        <p className='text-3xl '>Incearca chiar acum</p>
        <p className='mt-4 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to="/sign-in">
          <Button color='dark'>Sign In</Button>
        </Link>
      </div>
        
      </>
    );
  }

export default Home;