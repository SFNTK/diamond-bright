"use client"
import React, { useState } from 'react';
import "./login.css"
import gsap from 'gsap';

const Page = () => {
    const [formData, setFormData] = useState({
        id: '',
      password:''
      })
    
      const [errors, setErrors] = useState({})
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }))
      }
    
      const validateForm = () => {
        let newErrors = {}
        if (!formData.id) newErrors.id = 'id is required'
        if (!formData.password) newErrors.password = 'password is required'

     
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
          console.log('Form submitted:', formData)
          // Here you would typically send the data to your server
        }
      }
    return (
    <div id='loginpage' className='bg-brightwhite '>
            <div id='login'>
            <img src='./logobright.png'/>
            <div id='formlogin' >

            
            <div >
                <label htmlFor="id" className="block text-darkslate text-sm font-bold  mb-1">id</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  required
                  value={formData.id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.id && <p className="mt-1 text-sm text-red-600">{errors.id}</p>}
              </div>

              <div >
                <label htmlFor="password" className="block text-darkslate text-sm font-bold  mb-1">password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

<div  id='loginbtn'  onMouseLeave={(e)=>{
  gsap.to(e.currentTarget,{y:10})
}} onMouseEnter={(e)=>{
  gsap.to(e.currentTarget,{y:-10})
}}>ENTER</div>

            </div>
        </div>
    </div>
    );
}

export default Page;
