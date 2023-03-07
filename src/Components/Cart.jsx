import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';


const Cart =() =>{
    return <div >
        <button className='flex items-center bg-yellow-400 px-4 py-2  rounded-md shadow-xl'>
        <BsFillCartFill className=''/>
        <span className='px-1 text-lg'>
            Cart
        </span>

        </button>
    </div>
}

export default Cart