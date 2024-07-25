// app/home/components/Header.js
import { IoBookOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const Header = () => {
  return (
    <header className="relative flex items-center justify-center w-full h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.30) 100%), url('/images/header.jpg')"
      }}>
      <div className="text-center text-white max-w-screen-lg">
        <h1 className="text-[63.28px] font-bold mb-2 px-12 mx-12 leading-[75.936px]">Find Your Mentor for your next skill</h1>
        <p className="text-lg mb-12 pb-6">Welcome to Coach Me, where we bridge the gap between ambition and achievement.</p>
        <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-md mt-12">
          <div className="flex flex-col items-start px-4 py-2 flex-1">
            <label className="text-gray-500">Expertise</label>
            <div className="flex items-center mt-1 w-full">
              <IoBookOutline className="mr-2 text-gray-500" />
              <select className="text-black outline-none font-semibold w-full text-[20px]">
                <option>Industry</option>
                <option>Technology</option>
                <option>Health</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start px-4 py-2 border-l border-gray-300 flex-1 text-[20px]">
            <label className="text-gray-500">Price Range</label>
            <div className="flex items-center mt-1 w-full">
              <CiCalendar className="mr-2 text-gray-500" />
              <select className="text-black outline-none font-semibold w-full">
                <option>£10 per hour</option>
                <option>£20 per hour</option>
                <option>£30 per hour</option>
              </select>
            </div>
          </div>
          <div className="border-l border-gray-300 h-full ml-4 mr-2"></div>
          <button className="bg-primary-contrast text-white px-6 py-6 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
