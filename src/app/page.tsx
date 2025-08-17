'use client';

import { useState } from 'react';
import Logo from '../components/Logo';

// Modal component for gallery items
const GalleryModal = ({ isOpen, onClose, item, type }: { 
  isOpen: boolean; 
  onClose: () => void; 
  item: { src: string; alt: string }; 
  type: 'image' | 'video'; 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4" 
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 z-10"
        >
          ×
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          {type === 'video' ? (
            <video 
              src={item.src}
              className="w-full h-auto max-h-[80vh]"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img 
              src={item.src}
              alt={item.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<{ src: string; alt: string } | null>(null);
  const [modalType, setModalType] = useState<'image' | 'video'>('image');

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
              <Logo variant="compact" className="scale-50 md:scale-60" />
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

      {/* Hero Video Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="w-full h-screen">
          <video 
            className="w-full h-full object-cover"
            controls
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          >
            <source src="/assets/movies/hero_no_fades.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">degolyerdads@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Ready to get connected with the DeGolyer Dads Club? We'd love to hear from you! 
                    Whether you're new to the club or a returning member, this form helps us understand 
                    your interests and how you'd like to get involved in supporting our school community.
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/17DtAzqAeI-KKLcTl7N4Vx1rgmyiRw1ixIleF8iE1D0w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Join the Dads Club
                  </a>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg text-center space-y-4">
                  <div className="bg-teal-100 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.194 14.644c0 1.506 1.248 2.732 2.778 2.732s2.778-1.226 2.778-2.732-1.248-2.732-2.778-2.732-2.778 1.226-2.778 2.732zm6.944-2.733c0-1.506-1.248-2.732-2.778-2.732s-2.778 1.226-2.778 2.732 1.248 2.732 2.778 2.732 2.778-1.226 2.778-2.732zm6.944 0c0-1.506-1.248-2.732-2.778-2.732s-2.778 1.226-2.778 2.732 1.248 2.732 2.778 2.732 2.778-1.226 2.778-2.732z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-teal-800">Join Our Slack Community</h4>
                  <p className="text-teal-700 text-sm leading-relaxed">
                    Connect with other dads in real-time! Before joining Slack, please complete the form above 
                    so we can add you to the right channels based on your interests.
                  </p>
                  <a 
                    href="https://join.slack.com/t/degolyerdadsclub/shared_invite/zt-rg2bvg5z-jDjMyFr4cTD~uwo~SJ4ohg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-sm"
                  >
                    Join Slack
                  </a>
                </div>
              </div>
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
            {[
              'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
              'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png',
              'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'
            ].map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setModalItem({ src: `/assets/${image}`, alt: `DeGolyer Dads Club Event ${index + 1}` });
                  setModalType('image');
                  setModalOpen(true);
                }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={`/assets/${image}`}
                    alt={`DeGolyer Dads Club Event ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
            
            {[
              { name: 'Event Video 1', file: 'n1.mp4' },
              { name: 'Event Video 2', file: 'n2.mp4' },
              { name: 'Event Video 3', file: 'n3.mp4' },
              { name: 'Event Video 4', file: 'n4.mp4' },
              { name: 'Event Video 5', file: 'n5.mp4' }
            ].map((video, index) => (
              <div 
                key={`video-${index}`} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 overflow-hidden">
                  <video 
                    src={`/assets/movies/${video.file}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
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

      {/* Auction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online Auction
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Our next auction will be held on Saturday, January 11, 2026 at the Sparkman Clubhouse. Join us for an exciting evening of bidding on amazing items and experiences!
            </p>
            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Visit Our Last Auction
              </h3>
              <p className="text-gray-600 mb-6">
                Check out our previous auction to see the types of items and experiences we offer.
              </p>
              <a 
                href="https://event.auctria.com/f686fa91-5ca3-47c8-8ede-cd4b66145729" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
              >
                View Last Auction
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Helpful Links Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Links</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay connected with our school community through these important resources and official channels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">School PTA</h3>
              <p className="text-gray-600 mb-4">Connect with our Parent Teacher Association</p>
              <a 
                href="https://www.degolyerpta.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Visit PTA
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">School Website</h3>
              <p className="text-gray-600 mb-4">Official DeGolyer Elementary website</p>
              <a 
                href="https://degolyer.dallasisd.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Visit School
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">School Calendar</h3>
              <p className="text-gray-600 mb-4">Stay updated with school events</p>
              <a 
                href="https://degolyer.dallasisd.org/calendar21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                View Calendar
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 rounded-lg p-6 mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">District Home</h3>
              <p className="text-gray-600 mb-4">Dallas ISD official website</p>
              <a 
                href="https://www.dallasisd.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Visit District
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Leadership Team</h2>
            <p className="text-gray-600">Meet the volunteers who make the Dads Club possible</p>
          </div>
          
          {/* Board Members */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">Board Members</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Fermin Sanchez</h4>
                <p className="text-teal-700 text-sm">President</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Justin Coppedge</h4>
                <p className="text-teal-700 text-sm">Vice President</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Drew Klein</h4>
                <p className="text-teal-700 text-sm">Secretary</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Kyle Bilton</h4>
                <p className="text-teal-700 text-sm">Treasurer</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Chris Rigoulot</h4>
                <p className="text-teal-700 text-sm">At Large (TAD)</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Jeff Attkisson</h4>
                <p className="text-teal-700 text-sm">At Large (Auction)</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Taron Smith</h4>
                <p className="text-teal-700 text-sm">At Large (Golf)</p>
              </div>
            </div>
          </div>
          
          {/* Committee Chairs */}
          <div>
            <h3 className="text-2xl font-bold text-teal-800 mb-6 text-center">Committee Chairs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Colin Felch</h4>
                <p className="text-blue-700 text-sm">Health & Wellness Chair</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">David Wilborn</h4>
                <p className="text-blue-700 text-sm">TAD Chair</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Zach Niehaus</h4>
                <p className="text-blue-700 text-sm">Golf Chair</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Shane Batie</h4>
                <p className="text-blue-700 text-sm">Golf Committee</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Dave Smith</h4>
                <p className="text-blue-700 text-sm">Auction Chair</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Nathan Haley</h4>
                <p className="text-blue-700 text-sm">Auction Committee</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Tim Guglielmo</h4>
                <p className="text-blue-700 text-sm">Auction Committee</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Brad Hudnall</h4>
                <p className="text-blue-700 text-sm">Recruitment Chair</p>
              </div>
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
                <a href="https://www.instagram.com/degolyerdadsclub/" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/degolyerdadsclub" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
      
      {/* Gallery Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 gallery-modal" 
          style={{ 
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transform: 'translateZ(0)'
          }}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              {modalType === 'video' ? (
                <video 
                  src={modalItem?.src}
                  className="w-full h-auto max-h-[80vh]"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={modalItem?.src}
                  alt={modalItem?.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 