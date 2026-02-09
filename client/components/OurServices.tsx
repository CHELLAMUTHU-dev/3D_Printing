import React from 'react'

const OurServices = () => {
  return (
    <div >
      <h1 className="text-4xl font-bold mt-15 mb-5 px-15 text-gray-800">Our Services</h1>
      <p className="text-black-500 text-base px-15 mb-7 text-lg" >Our comprehensive range of 3D printing services includes rapid prototyping, production parts,and powerful software offer a seamless experience from design to manufacture to solve the complex challenges of modern manufacturing. Advance range of 3D printers, diverse selection of materials, and powerful software, we help businesses drive quick and efficiency.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-15 pb-15'>

      <div>
        <img src="/3D_printer.jpg" alt="3D Printers" className="w-full h-70 rounded-lg" />
        <h1 className="text-3xl font-semibold py-4 text-gray-800">3D Printers</h1>
        <p>Our state-of-the-art 3D printers offer high precision, speed, and reliability for all your prototyping and production needs.</p>
      </div>
      <div>
        <img src="/filament.jpg" alt="Filament" className="w-full h-70 rounded-lg" />
        <h1 className="text-3xl font-semibold py-4 text-gray-800">Filament</h1>
        <p>Our high-quality 3D printing filaments are designed for optimal performance, durability, and print quality across a wide range of applications.</p>
      </div>
      <div>
        <img src="/software.jpg" alt="Software" className="w-full h-70 rounded-lg" />
        <h1 className="text-3xl font-semibold py-4 text-gray-800">Software</h1>
        <p>Our powerful 3D printing software provides intuitive design tools, slicing capabilities, and advanced post-processing features to streamline your workflow.</p>
      </div>
      </div>
    </div>
  )
}

export default OurServices