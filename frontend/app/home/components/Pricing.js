// app/home/components/PricingSection.js
import React from 'react';

const plans = [
  {
    title: 'Mentor',
    price: '£75',
    features: [
      'A pre-coaching needs assessment',
      'A 60-minute chat over Webex or phone',
      'A follow-up plan of attack from your coach',
    ],
    buttonText: 'Buy Now',
    buttonColor: 'bg-primary-color', // default button color
  },
  {
    title: 'Master Coach',
    price: '£340',
    features: [
      'A pre-coaching needs assessment',
      'A 60-minute chat over Webex or phone',
      'A follow-up plan of attack from your coach',
    ],
    buttonText: 'Buy Now',
    buttonColor: 'bg-primary-contrast', // special color for the middle plan
  },
  {
    title: 'Coach',
    price: '£165',
    features: [
      'A pre-coaching needs assessment',
      'A 60-minute chat over Webex or phone',
      'A follow-up plan of attack from your coach',
    ],
    buttonText: 'Buy Now',
    buttonColor: 'bg-primary-color', // default button color
  },
];

const PricingSection = () => {
  return (
    <section className=" min-h-[55vh] relative py-20" style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.35) 100%),  url('/images/pricing-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-8 text-white">Our Pricing Plans</h2>
      <p className="text-xl text-center mb-12 text-white">We have three pricing plans below. You can also get started with a free trial, no credit card needed.</p>
      <div className="flex justify-center space-x-8">
        {plans.map((plan, index) => (
          <div key={index} className={`rounded-lg shadow-md p-8 w-full md:w-1/3 ${index === 1 ? 'bg-primary-color text-white transform scale-y-110' : 'bg-white'}`} style={{ backgroundColor: index === 1 ? 'rgba(91, 58, 199, 0.85)' : 'rgba(255, 255, 255, 0.85)' }}>
            <h3 className="text-3xl font-bold mb-4 py-2">{plan.title}</h3>
            <p className="text-xl mb-1 ">{`Starts from`}</p>
            <p className="text-5xl pb-4 font-bold mb-4">{plan.price}</p>
            <ul className="mb-8 space-y-2 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" /></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className='text-center py-5'>
                <button className={`py-3 px-6 text-center hover:scale-105 rounded-lg font-bold ${plan.buttonColor} ${index === 1 ? 'text-white': 'text-white ' }`}>{plan.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default PricingSection;
