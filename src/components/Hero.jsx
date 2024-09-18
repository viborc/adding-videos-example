import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Revolutionize Your Workflow with AI</h1>
            <p className="text-xl mb-10">Harness the power of artificial intelligence to streamline your business processes.</p>
            <Button size="lg" variant="secondary">Get Started</Button>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-[400px] rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="AI SaaS Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
