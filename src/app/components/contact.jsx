"use client"
import React, { useState } from 'react';
import './contact.css'
import { Mail, PenLineIcon, Phone, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"


const Contact = () => {
    const { toast } = useToast()
    const[errormsg,seterrormsg]=useState("")
    const [formData, setFormData] = useState({
        fullName: '',
        message: '',
        email: '',
        phoneNumber: '',
       
      })
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }))
      }
      const validtpfrm=()=>{
        if(formData.fullName=='' || formData.phoneNumber=='' || formData.email=='' || formData.message==''){
            toast({
                title: "You have to fill or the inputs",
                
              })
        }else{
            toast({
                title: "Your Message is sent succesfully",
                description: "We will contact you as soon as possible",
              })
        }
      }
    

    return (

        <div id='contactsection'>
            <img src='./contact.jpg' id='backcpntact' />
            <div id='contactcontainer'>
                <h2>CONTACT US</h2>

                <form >

                    <div className="group">
                        <User className='icon'/>
                        <input onChange={handleChange} value={formData.fullName} required name='fullName' className="input" type="text" placeholder="FULL NAME" />
                    </div>
                    <div className="group">
                       <Phone className='icon'/>
                        <input name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} required={true} className="input" type="tel" placeholder="PHONE NUMBER" />
                    </div>
                    <div className="group">
                       <Mail className='icon'/>
                        <input required name='email' onChange={handleChange} value={formData.email} className="input" type="text" placeholder="EMAIL" />
                    </div>
                    <div className="group">
                       <PenLineIcon className='icon'/>
                        <textarea required name='message' onChange={handleChange} value={formData.mesage} className="input"  placeholder="Your Message" />
                    </div>
                    <div onClick={(e)=>{
                 
                       validtpfrm()
                    }} id="contactbtn">
                        ENVOYER

                    </div>
                </form>

            </div>
        </div>

    );
}

export default Contact;
