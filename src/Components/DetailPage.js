import React from 'react'
import {useParams} from "react-router-dom";
import {DATA} from "./ProductItems";


const DetailPage = () => {
  let {id} = useParams();
  const projectData = DATA.find((x) => x.id == id);
  
 
  return (
    <>
    <div className='mt-5 py-5 grid-cols-2 gap-2'>
        <div className='px-5 rounded overflow-hidden grid grid-cols-2 gap-x-2.5 mx-10'>
            <div className='w-full h-full shadow-xl rounded-lg px-5'>
             <img src={projectData?.image} alt="product"/>
            </div>
            <div className=' shadow-xl rounded-lg px-5 '>
              <h2 className='text-xl'>{projectData.description}</h2>
              <div>
              <h4  className='text-xl my-4'>${projectData.price}</h4>
              <h4>{projectData.brand}</h4>
              <button className='bg-green-100  py-2 rounded hover:bg-green-300 px-16  my-10'>Add to cart</button>
            </div>

            </div>
            

        </div>

    </div>
    </>
  )
}

export default DetailPage