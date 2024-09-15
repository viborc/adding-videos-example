import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Revolutionize Your Workflow with AI</h1>
        <p className="text-xl mb-8">Harness the power of artificial intelligence to streamline your business processes.</p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;