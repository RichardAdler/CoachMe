// app/global-components/Footer.js
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
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
            <p className="flex items-center"><FaEnvelope className="mr-2" /> CoachMe@info.co.uk</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 000 Name Street, Country, City UK, Poste Code</p>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Company</h3>
            <a href="#" className="block mb-1">Introduction</a>
            <a href="#" className="block mb-1">Contact</a>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Legal</h3>
            <a href="#" className="block mb-1">Privacy Policy</a>
            <a href="#" className="block mb-1">Terms and conditions</a>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <a href="#" className="block mb-1">FAQs</a>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <FaFacebookF className="w-8 h-8 p-2 bg-white text-primary-color rounded-md" />
          <FaTwitter className="w-8 h-8 p-2 bg-white text-primary-color rounded-md" />
          <FaLinkedinIn className="w-8 h-8 p-2 bg-white text-primary-color rounded-md" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
