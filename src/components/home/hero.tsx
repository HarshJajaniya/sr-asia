  import React from 'react'
  import Image from 'next/image'
import Link from 'next/link'
  
  const hero = () => {
    return (
      <div>  <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hands holding Earth with natural elements"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Building a Sustainable Future for Asia</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Advancing environmental governance, CSR excellence, and inclusive development across the Asian continent.
            </p>
           
          </div>
    <div className="flex justify-center mt-10 px-4">
  <button className="w-full max-w-[300px] h-[44px] flex justify-center items-center text-white bg-[#2E7D32] font-bold text-[18px] leading-[100%] hover:bg-[#155c35] transition-colors">
    Explore More
  </button>
</div>



        </div>
      </section></div>
    )
  }
  
  export default hero;
