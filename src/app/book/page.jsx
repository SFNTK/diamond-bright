"use client"
import React from 'react';
import Pricinghero from '../components/pricinghero';
import Infos from '../components/infos';
import "./book.css"
import Formbooking from '../components/formbooking';
import Layoutclient from '../components/layoutclient';
import { BookAIcon, Contact } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router=useRouter();  
  return (
      <>
      <Layoutclient>
      <Pricinghero 
      herobtn={"book now!"}
      fnct={()=>{
router.push('/book/#formcontt')
      }}
      heroicon={<Contact/>}
      herop={"Ready to experience exceptional cleaning?"}
heroh2={"Get in Touch or Book a Cleaning Today"}      />
<Infos/>
<Formbooking/>
</Layoutclient>
      </>
    );
}

export default Page;
