"use client"


import React from 'react'
import Gallery2 from '../components/gallery2';
import Pricinghero from '../components/pricinghero';
import Layoutclient from '../components/layoutclient';
import { GalleryThumbnails } from 'lucide-react';
import { useRouter } from 'next/navigation';


const Page = () => {
const router=useRouter()
    return (

        <>
            <Layoutclient>
                <Pricinghero
                    herobtn={"Explore Our Gallery"}
                    heroh2={"Our Work in Action"}
                    heroicon={<GalleryThumbnails/>}
                    fnct={()=>{
                        router.push('/gallery/#gallerycontainer')}} 
                    herop={"See our recent work and the quality we bring to every cleaning move-outs, deep cleans, and more, each done with exceptional care."}
                />
                <Gallery2 />
            </Layoutclient>
        </>
    )
}

export default Page;
