import React from 'react';
import { useState } from 'react';
import profile from "./assets/girl.jpg";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-pink">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="space-x-4">
            <a className="text-gray-600 hover:text-gray-900" href="#">Works</a>
            <a className="text-gray-600 hover:text-gray-900" href="#">Blog</a>
            <a className="text-gray-600 hover:text-gray-900" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="bg-pink-400 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">
              Hi, I am Dhanashri,<br />
              Web Developer
            </h1>
            <p className="text-white mb-6">
            Hey, I’m Dhanashri Laxman Musale, currently studying MSCCA-2. I’m passionate about coding, especially web development, and enjoy building creative and responsive websites. I also love cricket!
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full">
              Download Resume
            </button>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src={profile}
              alt="Portrait of Dhanashri, a web developer"
              className="rounded-full w-40 h-40"
            />
          </div>
        </section>

        <section className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Projects</h2>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Movie Search Application</h3>
              <p className="text-black mb-4">12 Feb 2025 | Design, Pattern</p>
              <p className="text-gray-600">
              A Movie Search Application is a web or mobile-based platform that allows users to search for movies by title, genre, release year, or other filters. It typically fetches real-time data from a movie database API, providing users with details such as plot summaries, cast, ratings, trailers, and reviews. Some advanced versions also offer personalized recommendations, watchlists, and streaming availability. Designed with an intuitive UI, the app enhances user experience by offering quick search functionality, responsive design, and seamless navigation.
              </p>
            </div>
            <div className="bg-red-300 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Trafalgar Portfolio</h3>
              <p className="text-black mb-4">10 Feb 2025 | Figma, Icon Design</p>
              <p className="text-gray-600">
              The Trafalgar Portfolio is a modern and visually appealing portfolio website design that showcases projects, skills, and professional achievements. It features a clean, minimalistic layout with smooth animations and an intuitive user interface, making it easy for visitors to navigate. Typically built with technologies like React.js, Tailwind CSS, and modern UI/UX principles, it includes sections like an about page, project gallery, testimonials, and contact form. The Trafalgar Portfolio emphasizes responsiveness and accessibility, ensuring a seamless experience across all devices while maintaining a professional and elegant aesthetic.
              </p>
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black">©2020 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;