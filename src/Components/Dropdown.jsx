import React from 'react'

const Dropdown = () =>{
    return <div className='flex flex-col dropdownProfile'>
        <ul className='flex flex-col gap-4'>
            <li>My Orders</li>
            <li>Saved Address</li>
            <li>My Wallet</li>
            <li>FAQ's</li>
            <li>Log Out</li>

        </ul>
    </div>
}

export default Dropdown