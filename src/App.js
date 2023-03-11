import React from 'react'
import { Header,MainContainer,CreateContainer, PhoneSignup } from './Components'
import {Routes,Route} from 'react-router-dom'

const App = () =>{
    return <div className='w-screen h-screen flex flex-col bg-yellow-50'>
        <Header/>
        <main className='mt-[6.8rem] overflow-hidden  w-full'>
            <Routes>
                <Route path='/*' element={<MainContainer/>}  />
                <Route path='/createItem' element={<CreateContainer/>} />
                <Route path='/phonesignup' element={<PhoneSignup/>} />
            </Routes>
        </main>

    </div>
}

export default App