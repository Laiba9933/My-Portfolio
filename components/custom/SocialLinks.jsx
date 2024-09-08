import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-gray-700 hover:text-black" />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
      </a>
    </div>
  );
}
