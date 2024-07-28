'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollToTop(window.scrollY > 300); // Show arrow after scrolling down 300px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (pathname !== '/home') {
      router.push(`/home#${id}`);
    } else {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Section not found: ${id}`);
        }
      }
    }
  };

  return (
    <>
      <div className="h-20"></div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-black bg-opacity-75 text-white backdrop-blur'
            : 'bg-transparent text-black'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4 px-[120px]">
          <div className="flex items-center">
            <div className="flex">
              <div className="bg-primary-color p-2 text-white font-bold flex items-center justify-end w-[80px]">
                Coach
              </div>
              <div className="bg-primary-contrast p-2 text-white font-bold flex items-center">
                Me
              </div>
            </div>
          </div>
          <ul className="flex space-x-10 text-[18px]">
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
            <li><a href="#introduction" onClick={(e) => scrollToSection(e, 'introduction')}>Introduction</a></li>
            <li><a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a></li>
            <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
            <li><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</a></li>
            <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
          </ul>
          <div className="bg-primary-contrast text-white px-4 py-2 rounded-md flex items-center text-[18px]">
            <Image src="/images/userIcon.svg" alt="User Icon" width={20} height={21} className="mr-2" />
            <Link href="/login">Log in</Link>
          </div>
        </div>
      </nav>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed border z-50 bottom-8 right-8 p-3 bg-primary-color text-white rounded-full shadow-lg hover:bg-primary-contrast transition duration-300"
        >
          <MdKeyboardArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default Navbar;
