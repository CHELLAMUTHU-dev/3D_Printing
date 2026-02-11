import React from "react";

const OurSolution = () => {
  return (
    <div className="bg-gray-100 px-8 scroll-smooth">
      <h1 className="text-4xl font-bold py-10 px-15">Our Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-10 pb-15">
        <div>
          <img
            src="/rapid_prototype.jpg"
            alt="Rapid Prototyping"
            className="w-full h-70 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
          />
          <h1 className="text-3xl font-semibold py-4 text-gray-800">
            Rapid Prototyping
          </h1>
          <p className="text-black-500 text-base">
            Functional testing, hyper-realistic, modeling and manufacturing of
            complex parts
          </p>
        </div>
        <div>
          <img
            src="/production_part.jpg"
            alt="Production Part"
            className="w-full h-70 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
          />
          <h1 className="text-3xl font-semibold py-4 text-gray-800">
            Production Parts
          </h1>
          <p className="text-black-500 text-base">
            Faster production of end-use parts, with high strength and
            durability, for low to medium volume production runs
          </p>
        </div>
        <div>
          <img src="/tooling.jpg" alt="Tooling" className="w-full h-70 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg" />
          <h1 className="text-3xl font-semibold py-4 text-gray-800">Tooling</h1>
          <p className="text-black-500 text-base">
            Strong and versatile material for fast, tooling solutions for
            manufacturing and production needs
          </p>
        </div>

        <div>
          <img src="/dental.jpg" alt="Dental" className="w-full h-70 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg" />
          <h1 className="text-3xl font-semibold py-4 text-gray-800">Dental</h1>
          <p className="text-black-500 text-base">
            fixtures, surgical guides, dental models, and custom dental
            appliances with high precision and biocompatibility
          </p>
        </div>
        <div>
          <img src="/medical.jpg" alt="Medical" className="w-full h-70 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg" />
          <h1 className="text-3xl font-semibold py-4 text-gray-800">Medical</h1>
          <p className="text-black-500 text-base">
            Patient-specific anatomical models, surgical planning tools, custom
            prosthetics, and medical device components with high accuracy and
            biocompatibility
          </p>
        </div>
        <div>
          <img src="/packaging.jpg" alt="Packaging" className="w-full h-70 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg" />
          <h1 className="text-3xl font-semibold py-4 text-gray-800">Packaging</h1>
          <p className="text-black-500 text-base">
            Design, prototyping, and production of custom packaging solutions,product enclosures
            with high precision and durability
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
