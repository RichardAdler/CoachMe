'use client'
// app/home/components/FAQSection.js
import React, { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const faqs = [
  {
    question: 'How can a mentor help me with career development?',
    answer: 'A mentor can provide valuable insights into industry trends, help you set career goals, offer advice on professional growth, and connect you with networking opportunities to advance your career.',
  },
  {
    question: 'What support is available for academic achievement?',
    answer: 'Our mentors can help you develop effective study strategies, provide guidance on academic projects, and offer support for exam preparation to help you achieve your academic goals.',
  },
  {
    question: 'How can mentorship enhance my skills?',
    answer: 'Mentorship provides personalized feedback and advice, helping you to identify and strengthen your skills. Mentors can also introduce you to new tools and methodologies to enhance your capabilities.',
  },
  {
    question: 'Is there a fee for joining the mentorship program?',
    answer: 'Yes, there is a fee for joining the mentorship program. The fee structure varies depending on the type of mentorship and the duration of the program.',
  },
  {
    question: 'How do I connect with a mentor?',
    answer: 'You can connect with a mentor through our online platform. Once you sign up, you will be matched with a mentor based on your preferences and goals.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="">
              <h2 className="text-3xl font-bold mb-4 bg-primary-color text-white p-6 rounded-xl">Frequently Asked Questions</h2>
              <p className="text-xl">Have Questions? We Have Answers!</p>
              <p className="mt-4">Please review our FAQ section for answers to commonly asked questions about our mentors and services.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image src="/images/FAQImage.png" alt="Contact Us" width={150} height={150} className="mr-4" />
                <p>If you are not able to find the information you need, please do not hesitate to contact our support team for additional help.<br></br>
                <a href="/contact" className="underline decoration-solid font-bold">Contact Us</a>
                </p>
              </div>
              
            </div>
          </div>
          <div className="md:w-2/3">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 border rounded-lg bg-white focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <span>{activeIndex === index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="p-4 border-t bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
