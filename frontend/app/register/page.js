// app/register/page.js
import Image from 'next/image';
import Link from 'next/link';
import { MdAppRegistration } from 'react-icons/md';

const Register = () => {
  return (
    <div className="min-h-screen flex items-stretch justify-center">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="relative w-full md:w-1/2 h-screen">
          <Link href="/register/student" className="h-full">
            <div className="relative w-full h-full">
              <Image
                src="/images/student.jpg"
                alt="Students"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-primary-color/90 flex flex-col items-center justify-center text-white text-center gap-10">
                <h2 className="text-4xl font-bold">Students</h2>
                <button className="flex items-center bg-gradient-to-r from-orange-500 to-purple-500 mt-4 px-6 py-3 rounded-lg text-white font-semibold space-x-2">
                  <MdAppRegistration className="text-xl" />
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 h-screen">
          <Link href="/register/coach" className="h-full">
            <div className="relative w-full h-full">
              <Image
                src="/images/coach.jpg"
                alt="Coaches"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-contrast/90 to-black/30 flex flex-col items-center justify-center text-white text-center gap-10">
                <h2 className="text-4xl font-bold">Coaches</h2>
                <button className="flex items-center bg-gradient-to-r from-orange-500 to-purple-500 mt-4 px-6 py-3 rounded-lg text-white font-semibold space-x-2">
                  <MdAppRegistration className="text-xl" />
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
