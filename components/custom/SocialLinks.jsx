import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <a href="https://github.com/laiba9933" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-gray-700 hover:text-black" />
      </a>
      <a href="https://linkedin.com/in/laiba-khalid-3a1467298" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
      </a>
      <a href="https://wa.me/923558901911?text=Hello%20Laiba,%20I%20found%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="w-6 h-6 text-blue-400 hover:text-blue-600" />
      </a>
    </div>
  );
}
