'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const sliders = [
    {
      id:1,
      title: 'Japanese A5 Kagoshima Wagyu',
      description: 'Sale! Up to 20% off!',
      img: 'https://scontent.fmel10-1.fna.fbcdn.net/v/t39.30808-6/445474675_18069996475510463_1648866887344302937_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XdU7LwV2PFEQ7kNvgFQuy2N&_nc_ht=scontent.fmel10-1.fna&oh=00_AYBgeL3cxgAN6wltKJIWnFw4csJJOj_uOB7BeQ0HGxUxzQ&oe=665250F0',
      url: '/',
      bg: 'bg-gradient-to-r from-yellow-50 to-pink-50'
    },
    {
      id:2,
      title: 'Mother’s Day',
      description: 'Our premium selections make the perfect gift to pair with blooms and a bottle of fine wine this Mother’s Day. Just look at those beautiful marbling!',
      img: 'https://scontent.fmel10-1.fna.fbcdn.net/v/t39.30808-6/438217337_18068660593510463_1126537951601378624_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cdpXsjzqRCAQ7kNvgE4OGX7&_nc_ht=scontent.fmel10-1.fna&oh=00_AYBniHmvrtoRm_QjQSbTuUvWmnDlYRThaI03Lk9rZU6h5g&oe=66525DBE',
      url: '/',
      bg: 'bg-gradient-to-r from-pink-50 to-blue-50'
    },
    {
      id:3,
      title: 'Elevate Mother’s Day',
      description: 'Sale! Up to 20% off!',
      img: 'https://scontent.fmel10-1.fna.fbcdn.net/v/t39.30808-6/438222167_18067893997510463_2700572720114340430_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NSfUCcw5xW8Q7kNvgH2E4Fg&_nc_ht=scontent.fmel10-1.fna&oh=00_AYDcEUG1PhN0v4CH0ujpoQiw43BWpFdU6-4_QiKSa3qToA&oe=66523654',
      url: '/',
      bg: 'bg-gradient-to-r from-blue-50 to-yellow-50'
    },
  ]

const Slider = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === sliders.length -1 ? 0 : prev + 1))
        }, 3000)

        return () => clearInterval(interval)
    }, [])

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
        <div className='w-max h-full flex transition-all ease-in-out duration-1000'
        style={{ transform: `translateX(-${current * 100}vw)`}}
        >
            {sliders.map((slide) => (
                <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                    {/* TEXT CONTAINER */}
                    <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
                        <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                        <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h1>
                        <Link href={slide.url}><button className=' rounded-md bg-black text-white py-3 px-4'>SHOP NOW</button></Link>
                    </div>
                    {/* IMAGE CONTAINER */}
                    <div className='h-1/2 xl:w-1/2 xl:h-full relative'>
                        <Image src={slide.img} alt='' fill sizes='100%' className=' object-cover' />
                    </div>
                </div>
            ))}
        </div>
        <div className=' absolute m-auto left-1/2 bottom-8 flex gap-4'>
            {sliders.map((slide, index) => (
                <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? 'scale-150' : ''}`} key={slide.id} onClick={() => setCurrent(index)}>
                    {current === index && (<div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>)}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider