// app/home/components/SignupSection.js
import { FaRegCheckCircle } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-[75vh] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.35) 100%), url('/images/Introduction-bg.jpg')"
      }}>
      <div className="text-white max-w-screen-md px-4 text-center flex flex-col items-center ">
        <h2 className="text-5xl font-bold mb-4 py-8 leading-[90px] ">Reach your goals faster with expert mentors</h2>
        <p className="text-lg text-center mb-2 ">
          We connect you with highly-rated mentors who provide personalized, one-on-one guidance to help you accelerate your professional and personal growth.
        </p>
        <p className="text-lg mb-6">
          Whether you're looking to advance in your career, improve academic performance, or develop new skills, our community of expert coaches is here to support you every step of the way.
        </p>
        <p className="text-lg mb-10">
          Join us today and start your journey towards success!
        </p>
        <button className="bg-primary-contrast text-white px-8 py-4 rounded-xl flex items-center justify-center text-xl font-semibold">
          <FaRegCheckCircle className="w-6 h-6 mr-2" />
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Introduction;
