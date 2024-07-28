// app/home/components/SubscribeSection.js
import React from 'react';
import Image from 'next/image';
import '../../globals.css';

const SubscribeSection = () => {
  return (
    <section className="relative pb-12 mb-12">
      <div className="container mx-auto px-2 flex justify-center">
        <div className="relative w-full max-w-full h-[400px] rounded-3xl overflow-hidden">
          <Image
            src="/images/subscribe-bg.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 drop-shadow-md">
            <h2 className="text-5xl font-bold text-white mb-6">Join our mailing list</h2>
            <p className="text-white mb-8 w-1/2 ">Sign up for our newsletter to get the latest news, updates and amazing deals directly in your inbox.</p>
            <form className="flex w-full max-w-lg gap-8 mb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-5 rounded-2xl bg-white bg-opacity-40 text-white placeholder-white focus:outline-none"
              />
              <button type="submit" className="bg-primary-color p-5 rounded-2xl text-white font-bold">
                Subscribe
              </button>
            </form>
            <p className="text-white mt-4 text-sm w-2/3">
              By signing up you agree to our <a href="/privacy" className="underline">Privacy Policy</a> & <a href="/cookies" className="underline">Cookie Policy</a> and to receive marketing and account-related emails. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
