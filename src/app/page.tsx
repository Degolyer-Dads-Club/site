'use client';

import { useState } from 'react';
import Logo from '../components/Logo';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-teal-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo variant="white" className="scale-75 md:scale-90" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About Us
                </a>
                <a href="#contact" className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact Us
                </a>
                <a href="#gallery" className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Gallery
                </a>
                <a href="#calendar" className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Calendar
                </a>
                <a href="#merchandise" className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Merchandise
                </a>
                <a 
                  href="https://event.auctria.com/f686fa91-5ca3-47c8-8ede-cd4b66145729" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Auction
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-teal-100 hover:text-white p-2 rounded-md"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-teal-700">
              <a href="#about" className="text-teal-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </a>
              <a href="#contact" className="text-teal-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </a>
              <a href="#gallery" className="text-teal-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Gallery
              </a>
              <a href="#calendar" className="text-teal-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Calendar
              </a>
              <a href="#merchandise" className="text-teal-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Merchandise
              </a>
              <a 
                href="https://event.auctria.com/f686fa91-5ca3-47c8-8ede-cd4b66145729" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Auction
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <Logo variant="white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Supporting our school community through involvement, fundraising, and fun!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Supporting our school community through involvement, fundraising, and fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://degolyer.dallasisd.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Visit School Website
            </a>
            <a 
              href="#about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Supporting DeGolyer Elementary
              </h3>
              <p className="text-gray-600 mb-6">
                The DeGolyer Elementary Dads Club is a dedicated group of fathers, grandfathers, 
                and male role models who are committed to supporting our school community. 
                We work together to enhance the educational experience for all students through 
                various activities, fundraising events, and volunteer opportunities.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create a strong partnership between families and the school, 
                fostering a sense of community and providing resources that benefit every student 
                at DeGolyer Elementary.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Community Building
                </div>
                <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Fundraising
                </div>
                <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Volunteer Support
                </div>
              </div>
            </div>
            <div className="bg-teal-100 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-teal-800 mb-4">What We Do</h4>
              <ul className="space-y-3 text-teal-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Organize family events and activities
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support school programs and initiatives
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Provide volunteer assistance
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fundraise for school improvements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">3453 Flair Dr, Dallas, TX 75229</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(972) 794-2800</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">dadsclub@degolyer.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder images - replace with actual images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-teal-100 rounded-lg p-8 text-center">
                <div className="w-full h-48 bg-teal-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-teal-700 font-medium">Event Photo {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calendar
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Stay up to date with all our events and activities. Download our calendar to your device!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                             <div className="bg-gray-50 p-8 rounded-lg">
                 <div className="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                   <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Calendar</h3>
                 <p className="text-gray-600 mb-4">Add our events to your Google Calendar</p>
                 <a 
                   href="/calendar.ics" 
                   download
                   className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                 >
                   Download
                 </a>
               </div>
                             <div className="bg-gray-50 p-8 rounded-lg">
                 <div className="bg-teal-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                   <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-700 mb-2">iOS Calendar</h3>
                 <p className="text-gray-600 mb-4">Add our events to your iOS Calendar</p>
                 <a 
                   href="/calendar.ics" 
                   download
                   className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
                 >
                   Download
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section id="merchandise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Merchandise
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dads Club T-Shirt', price: '$25', image: '👕' },
              { name: 'School Spirit Hat', price: '$20', image: '🧢' },
              { name: 'Water Bottle', price: '$15', image: '💧' },
              { name: 'Sticker Pack', price: '$8', image: '🏷️' },
              { name: 'Hoodie', price: '$35', image: '🧥' },
              { name: 'Tote Bag', price: '$18', image: '👜' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 p-8 text-center">
                  <div className="text-6xl mb-4">{item.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-teal-600 mb-4">{item.price}</p>
                  <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online Auction
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Support our school by participating in our online auction! Bid on amazing items and experiences.
            </p>
            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to Bid?
              </h3>
              <p className="text-gray-600 mb-6">
                Visit our auction site to see all available items and start bidding today.
              </p>
              <a 
                href="https://event.auctria.com/f686fa91-5ca3-47c8-8ede-cd4b66145729" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
              >
                Go to Auction
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Logo variant="white" className="scale-75" />
              </div>
              <p className="text-teal-200">
                Supporting our school community through involvement, fundraising, and fun!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-teal-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-teal-200 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#gallery" className="text-teal-200 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#calendar" className="text-teal-200 hover:text-white transition-colors">Calendar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-teal-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-teal-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-teal-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-700 mt-8 pt-8 text-center">
            <p className="text-teal-200">
              © 2024 DeGolyer Elementary Dads Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
