import React, { useState } from 'react'
import {getAuth} from "firebase/auth"
import {  useNavigate } from 'react-router';
export default function Profile() {
  const auth = getAuth(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name : auth.currentUser.displayName,
    email : auth.currentUser.email,
  });

  function onLogout(){
    auth.signOut()
    navigate('/')
  }

  const {name, email} = formData;

  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-10 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3 '>
          <form>
              <input type="text" id='name' value={name} disabled className='w-full px-4 py-2 text-xl text-gray-700
               bg-white border border-gray-300 rounded transition ease-in-out mb-6' />
               
              <input type="email" id='email' value={email} disabled className='w-full px-4 py-2 text-xl text-gray-700
               bg-white border border-gray-300 rounded transition ease-in-out mb-6' />

               <div className='flex justify-between whitespace-nowrap text-sm text-lg '>
                <p className='flex items-center mb-6'>Do you want to change your info?
                  <span className='text-red-600 hover:text-red-900 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span>
                </p>
                <p onClick={onLogout} className='text-red-600 hover:text-blue-500 transition ease-in-out duration-200 cursor-pointer'>
                  Sign out
                </p>
               </div>
          </form>
        </div>
      </section>
    </>
  )
}
