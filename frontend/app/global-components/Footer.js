'use client'
// app/global-components/Footer.js
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


const Footer = () => {

  const [scrolled, setScrolled] = useState(false);  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <footer className="bg-primary-color text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="bg-primary-contrast text-white font-bold px-8 py-2 border flex justify-end">Coach</div>
            <div className="bg-primary-color text-white font-bold px-4 py-2 border">Me</div>
          </div>
        </div>
        <div className="border-t border-white mb-8"></div>
        <div className="flex flex-wrap justify-between text-left mb-8">
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Reach us</h3>
            <p className="flex items-center"><FaPhone className="mr-2" /> +0000 0000 000</p>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> <a href="mailto:CoachMe@info.co.uk">CoachMe@info.co.uk</a></p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 000 Name Street, Country, City UK, Poste Code</p>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Company</h3>
            <Link href="#introduction"  className="block" onClick={(e) => scrollToSection(e, 'introduction')}>Introduction</Link>
            <Link href="#features"  className="block" onClick={(e) => scrollToSection(e, 'features')}>Features</Link>
            <Link href="#testimonials"  className="block" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonials</Link>
            <Link href="#pricing"  className="block" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</Link>          
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Legal</h3>
            <Link href="/privacy-policy" className="block mb-1">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="block mb-1">Terms and conditions</Link>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <Link href="#faq"  className="block" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</Link>
            <Link href="#subscribe"  className="block" onClick={(e) => scrollToSection(e, 'subscribe')}>Subscribe</Link>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="w-8 h-8 p-2 bg-white text-primary-color rounded-md" /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="w-8 h-8 p-2 bg-white text-primary-color rounded-md" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="w-8 h-8 p-2 bg-white text-primary-color rounded-md" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
