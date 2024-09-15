import React from 'react';
import { Brain, Zap, BarChart } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain size={32} />}
            title="Smart Automation"
            description="Automate complex tasks with our advanced AI algorithms."
          />
          <FeatureCard
            icon={<Zap size={32} />}
            title="Lightning Fast"
            description="Experience unparalleled speed in data processing and analysis."
          />
          <FeatureCard
            icon={<BarChart size={32} />}
            title="Insightful Analytics"
            description="Gain deep insights from your data with our AI-powered analytics."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;