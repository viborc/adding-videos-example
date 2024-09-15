import React from 'react';
import { Button } from "@/components/ui/button";

const PricingCard = ({ title, price, features }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-sm text-gray-500">/month</span></p>
    <ul className="mb-8 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600">{feature}</li>
      ))}
    </ul>
    <Button className="w-full">Choose Plan</Button>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price={49}
            features={["1,000 API calls/month", "Basic analytics", "Email support"]}
          />
          <PricingCard
            title="Pro"
            price={99}
            features={["10,000 API calls/month", "Advanced analytics", "Priority support"]}
          />
          <PricingCard
            title="Enterprise"
            price={249}
            features={["Unlimited API calls", "Custom AI models", "Dedicated account manager"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;