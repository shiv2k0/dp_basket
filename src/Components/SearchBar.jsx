import React from 'react'
import { GoSearch } from "react-icons/go";

const SearchBar = () =>{
    return <div className='inputBox'>
        <GoSearch className='text-lg'/>
        <input type="text" className='searchInput ' />

    </div>
}

export default SearchBar