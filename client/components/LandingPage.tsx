"use client";
import React, { useState } from "react";

const LandingPage = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white max-h-[600px] w-auto mt-20 overflow-hidden">
      <div className="lg:w-2/5 xl:w-2/5 p-8 lg:p-12 xl:p-20 flex flex-col justify-center flex-1">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
          Industrial 3D Printing
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl mb-10 text-gray-300 leading-relaxed">
          Empowering additive manufacturing with cutting-edge 3D printing
          technologies for industries worldwide.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium">
            About Us
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Video Section - Takes 60% on large screens */}
      <div className="hidden lg:flex lg:w-[40%] xl:w-[45%] relative h-auto overflow-hidden">
        {" "}
        {videoError ? (
          <div className="absolute inset-0 bg-gradient-to-l from-black via-gray-900 to-black flex items-center justify-center">
            <p className="text-white text-xl">Video failed to load</p>
          </div>
        ) : (
          <>
            {/* Video Container */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={() => setVideoError(true)}
              >
                <source src="/landing_page_video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
