import React from "react";

const StepToProcess = () => {
  return (
    <div className=" bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mt-5 mb-13 px-15 text-gray-800">
        From first idea to final product
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 px-15 pb-15">
        <div className="bg-white p-15 flex flex-col items-center rounded-lg shadow-md  gap-4">
          <img
            src="/upload.png"
            alt="Process"
            className="w-15 h-15 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 ">
            Rapid Prototyping
          </h3>
          <p>Create your 3D model in any CAD software and upload it to our platform.</p>
        </div>
        <div className="bg-white p-15 flex flex-col items-center rounded-lg shadow-md  gap-4">
          <img
            src="/gears.png"
            alt="Production"
            className="w-15 h-15 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 ">
            On-demand Production
          </h3>
          <p>Choose your material, quantity, and specifications for production.</p>
        </div>
        <div className="bg-white p-15 flex flex-col items-center rounded-lg shadow-md justify-center gap-4">
          <img
            src="/truck.png"
            alt="delivery"
            className="w-15 h-15 rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 ">
            Custom tooling & End-use Parts
          </h3>
            <p>Industrial grade printers produce high-quality, durable parts for your specific needs.</p>
        </div>
      </div>
    </div>
  );
};

export default StepToProcess;
