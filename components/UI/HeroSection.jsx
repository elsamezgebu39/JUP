'use client'
import heroImage from 'public/hero_cropped.png'
import Image from 'next/image'
import background from 'public/background.svg'
import { Carousel, Radio } from 'antd';
import { useState } from 'react';

// images for the design
import cover1 from 'public/hero_cover1-removebg-preview.png'
import cover2 from 'public/hero_cover2-removebg-preview.png'
import cover3 from 'public/hero_cover3-removebg-preview.png'
import cover4 from 'public/hero_cover4-removebg-preview.png'
import cover5 from 'public/hero_cover5-removebg-preview.png'



let heroSectionList = [
    {
        id: 0,
        cover_image: heroImage,
        title: 'Some cool text goes in here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.'
    },
    {
        id: 1,
        cover_image: cover1,
        title: 'Some cool text goes in here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.'
    },
    {
        id: 2,
        cover_image: cover2,
        title: 'Some cool text goes in here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.'
    },
    {
        id: 3,
        cover_image: cover3,
        title: 'Some cool text goes in here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.'
    },
    {
        id: 4,
        cover_image: cover4,
        title: 'Some cool text goes in here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.'
    },
    {
        id: 5,
        cover_image: cover5,
        title: 'Some cool text goes in here',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.'
    }
]



const HeroCarousel = () => {

    return (
        <div className='relative'>
            <section className='bg-hero_bg '>
                <div className=" flex flex-col md:flex-row items-center h-full container">
                    <div className='text-white md:w-1/2   '>
                        <h1 className="head_text_white text-white">Some cool text goes in here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.</p>
                    </div>
                    <div className='md:w-1/2'>
                        <Image src={heroImage} alt="Image of hero section" />
                    </div>
                </div>

            </section>


        </div>
    )
}

export default HeroCarousel;

