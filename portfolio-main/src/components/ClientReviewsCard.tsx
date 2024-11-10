'use client';

import { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ClientReviews: React.FC = () => {
  // State to keep track of the active review index
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Fake Reviews data
  const reviews = [
    {
      name: "Alice Green",
      title: "CEO, GreenTech Innovations",
      review: "Incredible work! The website design was fresh, modern, and easy to navigate. Exceeded all expectations!",
      rating: 5,
      imageSrc: "/images/1.jpeg",
    },
    {
      name: "Bob Harris",
      title: "Founder, WebScape Studios",
      review: "Absolutely fantastic service. The project was delivered on time, and the attention to detail was amazing!",
      rating: 4,
      imageSrc: "/images/2.jpeg",
    },
    {
      name: "Catherine Scott",
      title: "Creative Director, Pixel Perfect",
      review: "I was blown away by the creativity and attention to detail. The team delivered a product that exceeded all my expectations.",
      rating: 5,
      imageSrc: "/images/3.jpeg",
    },
    {
      name: "David Clark",
      title: "Product Manager, Digital Solutions",
      review: "I couldn’t be happier with the results. The team was professional, responsive, and delivered a top-notch product.",
      rating: 5,
      imageSrc: "/images/4.jpg",
    },
    {
      name: "Eva White",
      title: "Marketing Manager, MediaX",
      review: "The website is exactly what we needed. The team listened carefully to our requirements and delivered beyond what was expected.",
      rating: 4,
      imageSrc: "/images/5.jpg",
    },
    {
      name: "Frank Mitchell",
      title: "CTO, NextGen Solutions",
      review: "Amazing results! The website is sleek, user-friendly, and works perfectly across all devices. Great collaboration!",
      rating: 5,
      imageSrc: "/images/6.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6">Client Reviews</h2>
        <div className="w-36 h-1 mx-auto bg-indigo-300 mb-12"></div>

        {/* Reviews Grid for Larger Screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Single Card with Dot Navigation for Mobile */}
        <div className="md:hidden">
          <ReviewCard {...reviews[activeReviewIndex]} />

          {/* Dots for navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReviewIndex(index)}
                className={`w-4 h-4 rounded-full ${activeReviewIndex === index ? 'bg-indigo-300' : 'bg-indigo-700'} transition-all duration-300`}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  name: string;
  title: string;
  review: string;
  rating: number;
  imageSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, title, review, rating, imageSrc }) => (
  <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <Image src={imageSrc} alt={name} width={100} height={100} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-indigo-300" />

    <div className="text-center text-lg mb-4 font-medium">
      <FaQuoteLeft className="inline-block text-indigo-300 mr-1" />
      <span className="italic">{review}</span>
      <FaQuoteRight className="inline-block text-indigo-300 ml-1" />
    </div>

    <div className="text-lg font-semibold">{name}</div>
    <p className="text-sm text-indigo-100">{title}</p>

    <div className="flex mt-3">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
    </div>
  </div>
);

export default ClientReviews;
