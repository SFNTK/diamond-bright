"use client"
import React from 'react';
import Pricinghero from '../components/pricinghero';
import Pricingtier from '../components/pricingtier';
import Callpric from '../components/callpric';
import "./pricing.css"
import Layoutclient from '../components/layoutclient';
import { DollarSign, Package } from 'lucide-react';
import Cardcities from '../components/cardcities';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router=useRouter()
    return (
        <div>
              <Layoutclient>
           <Pricinghero fnct={()=>{
            router.push('/pricing/#pricing')}}  heroh2={"Transparent Pricing for Every Service Need"} heroicon={<Package/>} herop={"No surprises—just straightforward, competitive rates designed to meet all your cleaning needs"} herobtn={"Choose your package"}/>
           <Pricingtier/>
          
           <Cardcities/>
           <Callpric/>
           </Layoutclient>
        </div>
    );
}

export default Page;
