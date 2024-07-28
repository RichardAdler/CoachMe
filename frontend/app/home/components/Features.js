// app/home/components/Features.js
import { FaPercent, FaHeadset, FaCalendarAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaPercent className="w-12 h-12 text-primary-color" />,
    title: 'Tailored Guidance',
    description: 'Receive customised advice and support tailored to your specific career goals and academic needs. Our mentors are dedicated to helping you succeed.',
  },
  {
    icon: <FaHeadset className="w-12 h-12 text-primary-color" />,
    title: 'Professional Expertise',
    description: 'Connect with experienced professionals from various industries. Our mentors bring a wealth of knowledge and real-world experience to guide you on your journey.',
  },
  {
    icon: <FaCalendarAlt className="w-12 h-12 text-primary-color" />,
    title: 'Flexible Scheduling',
    description: 'Schedule mentorship sessions at times that work best for you. Our flexible booking options ensure you can balance mentorship with your other commitments.',
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-100 min-h-[35vh] content-center">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <div className="flex-shrink-0 mr-6">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-justify">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
