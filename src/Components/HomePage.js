import React from 'react'
import {DATA} from "../Components/ProductItems";
import {useNavigate} from "react-router-dom";
import  {useStore}  from '../Store/Store';

const HomePage = () => {

    const {AddToCart} = useStore();
    

    let Navigate = useNavigate();
    const PageHandler = (item) => {
        Navigate(`/home/${item}`);
    };
  return (
    <>
    <div className='grid grid-cols-4 gap-4 justify-items-center content-center px-3' >
        {DATA.map((items) => (
            
            <div className='' key={items.id}>
                <div className='py-2'>
                    <div className='rounded overflow-hidden'>
                        <div className='w-full' onClick={() => PageHandler(items.id)}>
                            <img src={items.image} alt="product" />

                        </div>
                        <div className='px-3 py-3 text-lg flex justify-items-center flex-col items-center '>
                            <div>
                                {items.name}
                            </div>
                            <div>
                                ${items.price}
                            </div>

                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-green-100 px-5 py-2 rounded hover:bg-green-300 ' onClick={() => AddToCart(items)}>Add to Cart</button>
                        </div>

                    </div>

                </div>

                
              
                
            </div>
        ))}

    </div>



    
    </>
  )
}

export default HomePage