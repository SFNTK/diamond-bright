
'use client'

import React, { useState, useEffect } from 'react'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "./gallerypage.css"
const images = [
    { src: '/gallery1.jpg', alt: 'Gallery Image 1',key:1 },
    { src: '/gallery2.jpg', alt: 'Gallery Image 2' ,key:2},
    { src: '/gallery3.jpg', alt: 'Gallery Image 3',key:3 },
    { src: '/gallery4.jpg', alt: 'Gallery Image 4' ,key:4 },
    { src: '/gallery5.jpg', alt: 'Gallery Image 5' ,key:5 },
    { src: '/gallery6.jpg', alt: 'Gallery Image 6' ,key:6 },
    { src: '/gallery7.jpg', alt: 'Gallery Image 7' ,key:7 },
    { src: '/gallery8.jpg', alt: 'Gallery Image 8',key:8 },
    { src: '/gallery9.jpg', alt: 'Gallery Image 9' ,key:9},
]
const Gallery2 = () => {
    const [contentgallery, setgalery] = useState(<></>)
    useEffect(() => {
        const gallerycontent = images.map(data => {
            return <div key={data.key} className='galleryimage'>
                <Zoom>
                    <img src={data.src} alt={data.alt}  />
                </Zoom>
            </div>
        })
        setgalery(gallerycontent)

    }, [])



    return (
        <div id='gallerycontainer'>
{contentgallery}

        </div>
    )
}

export default Gallery2;
