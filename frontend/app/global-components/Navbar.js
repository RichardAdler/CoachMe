// app/global-components/Navbar.js
import Image from 'next/image';
import Link from 'next/link'; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-[120px]">
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
      <ul className="flex space-x-10 text-text-color-primary">
      <li><Link href="/home">Home</Link></li>
        <li><Link href="/introduction">Introduction</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
      </ul>
      <div className="bg-primary-contrast text-white px-4 py-2 rounded-md flex items-center">
        <Image src="/images/userIcon.svg" alt="User Icon" width={20} height={21} className="mr-2" />
        <Link href="/login">Log in</Link>
    </div>
    </nav>
  );
}

export default Navbar;
