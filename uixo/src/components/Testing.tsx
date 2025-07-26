
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Testing = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://placehold.co/300x300/6366f1/ffffff?text=AM",
      bio: "Visionary leader with 15+ years of industry experience, passionate about innovation and sustainable growth."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://placehold.co/300x300/8b5cf6/ffffff?text=SJ",
      bio: "Award-winning designer with expertise in user experience and brand strategy."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Tech Lead",
      image: "https://placehold.co/300x300/0ea5e9/ffffff?text=MC",
      bio: "Full-stack developer specializing in modern web technologies and scalable architectures."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Transparency and honesty guide every decision we make.",
      icon: "🛡️"
    },
    {
      title: "Collaboration",
      description: "Great things happen when talented people work together.", icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in everything we do.",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Our Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We're a passionate team of innovators dedicated to creating exceptional digital experiences that transform businesses and delight users.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Our Mission
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Journey <span className="text-indigo-400">Since 2015</span>
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  What started as a small team of passionate developers in a garage has evolved into a leading digital solutions company serving clients worldwide.
                </p>
                <p className="text-lg">
                  Over the years, we've helped hundreds of businesses transform their digital presence through innovative technology and creative design solutions.
                </p>
                <p className="text-lg">
                  Our commitment to excellence and customer satisfaction has earned us recognition as an industry leader and trusted partner for businesses of all sizes.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">250+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div> <div className="text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://placehold.co/600x400/1e293b/ffffff?text=Team+Photo" alt="Our team" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core <span className="text-purple-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide our work and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-indigo-400">Amazing Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Talented individuals working together to make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <div className="bg-slate-900 p-6">
                    <img
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-700"
                    />
                    <h3 className="text-2xl font-bold text-white text-center mb-2">{member.name}</h3>
                    <p className="text-indigo-400 text-center mb-4">{member.role}</p>
                    <p className="text-gray-300 text-center">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Get in Touch
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Company Name</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Creating innovative digital solutions that drive business success and user satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>info@company.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testing;
