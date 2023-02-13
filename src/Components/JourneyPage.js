import React from 'react';
import Grass from "../Assets/grass.jpg";



const JourneyPage = () => {
  return (
    <>
    <div className='relative h-[90vh]'>
      <img src={Grass} className=' absolute top-0 w-[100%] h-[100%] -z-10' />
        <h1 className=' z-50'>This is journey Page</h1>
        


    </div>
    </>
  )
}

export default JourneyPage;