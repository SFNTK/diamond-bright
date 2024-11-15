"use client"
import React from 'react';
import Testis from '../components/testis';
import Pricinghero from '../components/pricinghero';
import Layoutclient from '../components/layoutclient';
import { User2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';


const Page = () => {
  const router=useRouter()
 
    return (
      <>
        <Layoutclient>
      <Pricinghero 
      fnct={()=>{
        router.push('/testimontials/#testiscontainer')
      }}
      heroh2={"What Our Clients Are Saying "}
      heroicon={<User2Icon/>}
      herobtn=" Explore Feedbacks"
      herop={"Hear directly from those who’ve experienced our dedication to quality and care."}
      />
      <Testis/>
      </Layoutclient>
      </>
    );
}

export default Page;
