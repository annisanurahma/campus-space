import { Link } from "react-router-dom";
// import { useState } from "react";


export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Campus Space</h1>

      {/* TODO: Tambahkan hamburger & responsive menu nanti */}
      {/* 
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      */}

      {/* Navigation Menu */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
