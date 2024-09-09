import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Example social icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="relative w-14 h-14 bg-white p-1 rounded-full overflow-hidden">
            {" "}
            {/* Added light background */}
            <Image
              src="/brand.png"
              alt="PrimeAttire logo"
              layout="fill"
              style={{ objectFit: "cover", transform: "scale(1.44)" }} // Apply zoom effect
            />
          </div>
          <span className="text-lg font-semibold">PrimeAttire</span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-500" size={20} />
          </Link>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-500" size={20} />
          </Link>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-500" size={20} />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-sm text-gray-400">
          &copy; 2024 PrimeAttire, Inc. All rights reserved.
        </p>
        {/* Designed by Section */}
        <p className="text-center text-sm text-gray-400 mt-2">
          Designed by
          <Link
            href="https://portfolio-org.netlify.app/"
            target="_blank"
            className="text-white ml-1 hover:underline"
          >
            Azam
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
