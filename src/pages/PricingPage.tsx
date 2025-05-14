
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$99",
      description: "Perfect for small teams starting out",
      features: [
        "10 AI interviews per month",
        "Basic candidate analytics",
        "Email support",
        "1 job template"
      ],
      highlighted: false,
      cta: "Start Free Trial"
    },
    {
      title: "Professional",
      price: "$299",
      description: "For growing companies with regular hiring needs",
      features: [
        "50 AI interviews per month",
        "Advanced candidate insights",
        "Priority email & chat support",
        "Custom job templates",
        "Team collaboration features",
        "API access"
      ],
      highlighted: true,
      cta: "Start Free Trial"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited AI interviews",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Custom branding options",
        "ATS integration",
        "SSO & advanced security",
        "SLA guarantee"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600">
              Choose the plan that best fits your hiring needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-zara-purple shadow-lg' : 'border-gray-200'}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zara-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-zara-purple shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-zara-purple hover:bg-zara-purple-dark' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-zara-lavender rounded-xl p-10 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-lg mb-6">
              Contact our sales team for a tailored plan that suits your specific requirements.
            </p>
            <Button className="bg-zara-purple hover:bg-zara-purple-dark">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
