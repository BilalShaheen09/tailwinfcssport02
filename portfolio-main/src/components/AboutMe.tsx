

import Link from 'next/link';

const AboutMe: React.FC = () => {
  return (

    <div className="animate-slide-left">
    <div className="relative bg-gradient-to-r from-teal-800 to-black text-white py-12 rounded-lg">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/images/ww.jpg)' }}></div>
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h3>
        <p className="text-base sm:text-lg mb-6">
        "As a passionate Front-End Developer, I specialize in crafting intuitive, visually stunning, and highly interactive web applications. With a strong focus on user experience, I seamlessly blend creativity with functionality to create digital solutions that not only look amazing but also deliver exceptional performance and usability. I strive to turn complex ideas into seamless, engaging experiences that captivate users and elevate the digital landscape."
        </p>
        <Link href="/about" passHref>
          
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
