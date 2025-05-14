
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      description: "Perfect for small teams and startups",
      features: [
        "15 AI interviews per month",
        "Basic candidate analysis",
        "Email support",
        "1 hiring manager seat",
        "30-day data retention"
      ],
      isPopular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for growing companies",
      features: [
        "50 AI interviews per month",
        "Advanced candidate scoring",
        "Priority email & chat support",
        "5 hiring manager seats",
        "90-day data retention",
        "Custom interview templates"
      ],
      isPopular: true,
      buttonText: "Try Professional"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited AI interviews",
        "Enterprise-grade security",
        "Dedicated account manager",
        "Unlimited hiring manager seats",
        "1-year data retention",
        "Custom API integrations",
        "White-labeling options"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-zara-text-muted max-w-2xl mx-auto">
            Choose the plan that works best for your team. All plans include our core AI interviewing technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl border ${plan.isPopular ? 'border-zara-primary shadow-lg' : 'border-gray-200'} bg-zara-panel p-8 relative`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zara-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className="text-zara-text-muted text-sm">{plan.description}</p>
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-zara-success mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <Link to="/start-interviewing">
                  <Button 
                    className={`w-full ${plan.isPopular ? 'bg-zara-primary' : 'bg-white border border-zara-primary text-zara-primary hover:bg-zara-primary hover:text-white'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I switch plans later?</h3>
              <p className="text-zara-text-muted">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer a free trial?</h3>
              <p className="text-zara-text-muted">Yes, all new accounts come with 3 free AI interviews to help you experience the platform before committing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-zara-text-muted">We accept all major credit cards, as well as invoicing for annual enterprise plans.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is there a long-term commitment?</h3>
              <p className="text-zara-text-muted">No, our monthly plans are billed month-to-month with no long-term contract. We also offer annual plans with a discount.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
