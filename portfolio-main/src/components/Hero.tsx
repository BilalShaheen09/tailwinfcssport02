import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/5192479.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />

      <div className="absolute inset-0 flex justify-center items-center">
        {/* Gradient Blur 1: Vibrant circular background with scaling animation */}
        <div className="w-96 h-96 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-700 rounded-full animate-scale-up opacity-60 blur-xl"></div>

        {/* Gradient Blur 2: Soothing pastel tones with rotating animation */}
        <div className="w-80 h-80 bg-gradient-to-tl from-pink-300 via-yellow-300 to-teal-300 rounded-full animate-rotate opacity-50 blur-3xl absolute top-20 left-20"></div>

        {/* Gradient Blur 3: Deep contrasting gradient with pulse animation */}
        <div className="w-72 h-72 bg-gradient-to-b from-red-500 to-orange-500 rounded-full animate-pulse opacity-40 blur-2xl absolute bottom-20 right-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 mb-12 md:px-8 lg:px-16">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 mt-20 animate-fade-in">
          Hello <br /> I <span className="text-yellow-400">am Bilal Shaheen</span>
        </h1>

        {/* Profile Picture */}
        <div className="flex justify-center mt-6 mb-8">
          <Image
            src="/images/bgg.png"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Introduction Text */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto font-poppins font-semibold tracking-wide leading-relaxed animate-fade-in">
          I am a web developer specializing in creating pixel-perfect
          <span className="text-yellow-400"> responsive and visually appealing designs </span> <br />
          Let's bring creativity to the next level
        </p>

        {/* Explore Button */}
        {/* Add your button here if you want */}
      </div>
    </div>
  );
};

export default Hero;
