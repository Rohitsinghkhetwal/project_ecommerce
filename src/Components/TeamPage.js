import React from 'react';
import Christiano from "../Assets/christiano.jpg";

const TeamPage = () => {
  return (
   <>
   <div className='flex items-center justify-center mt-10 text-xl'>
    <h1>
        Without bonding and coordination, every prject is a failure, look at who makes KICKSUP great
    </h1>

   </div>
   <div className='pt-5 mt-5'>
    <div className='w-32 h-22'>
        <img src={Christiano} alt="card"/>
    </div>
    <h3>Christiano</h3>
    <p>financial Operation</p>

   </div>
   </>
  )
}

export default TeamPage