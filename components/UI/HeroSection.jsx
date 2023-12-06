import heroImage from 'public/hero_cropped.png'
import Image from 'next/image'
import background from 'public/background.svg'

const HeroSection = () => {
    return (
        <div>
            <section className='bg-hero_bg'>
                <div className=" flex items-center h-full container">
                    <div className='text-white'>
                        <h1>Lorem Text</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis deserunt ad officia dolore incidunt distinctio totam consequatur. Ipsa doloribus facilis nisi provident laboriosam exercitationem rerum, officiis quasi fuga hic dignissimos.</p>
                    </div>
                    <div className='w-full '>
                        <Image src={heroImage} />
                    </div>
                </div>

            </section>


        </div>
    )
}

export default HeroSection