// components/navbar/index.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg cursor-pointer">
          <Link href="/">Satyam</Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li className="link">
            <Link href="/projects/proj">Projects</Link>
          </li>
          <li className="link">
            <Link href="/certificates/CertificationsPage">Achievements</Link>
          </li>
          <li className="link">
            <a href="#" className="text-white hover:text-blue-300">
              Newsletter
            </a>
          </li>
          <li className="toggle-btn">
            <button className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-blue-300">
              Toggle Theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
