"use client"

import React, { useState } from 'react'
import "./formbooking.css"

const Formbooking = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        serviceType: '',
        address: '',
        squareFootage: '',
        bedrooms: '',
        bathrooms: ''
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
        if (!formData.firstName) newErrors.firstName = 'First Name is required'
        if (!formData.lastName) newErrors.lastName = 'Last Name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required'
        if (!formData.serviceType) newErrors.serviceType = 'Service type is required'
     
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
        <div id='formcontt' className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center p-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 max-w-2xl w-full space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Cleaning Service Request</h2>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className='w-full'>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="inputcontact w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>
              <div className='w-full'>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
    
            <div className='w-full'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (required)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
    
            <div className='w-full'>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (required)</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
            </div>
    
            <div className='w-full'>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Type of Service (required)</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="regular">Regular Housekeeping</option>
                <option value="deep">Deep Cleaning</option>
                <option value="moveout">Move-out Cleaning</option>
              </select>
              {errors.serviceType && <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>}
            </div>
    
            <div className='w-full'>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                required
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <div className='w-full'>
              <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
              <input
                type="number"
                id="squareFootage"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className='w-full'>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">Number of Bedrooms</label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  required
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className='w-full'>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">Number of Bathrooms</label>
                <input
                  type="number"
                  required
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            >
              Submit Request
            </button>
          </form>
        </div>
      )
}

export default Formbooking;
