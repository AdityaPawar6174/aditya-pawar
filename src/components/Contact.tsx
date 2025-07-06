import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Mail className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:adityabpawar393@gmail.com" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    adityabpawar393@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Phone className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+919322176438" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    +91 9322176438
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} mr-4`}>
                  <Linkedin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/adityapawar393" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    linkedin.com/in/adityapawar393
                  </a>
                </div>
              </div>
              
            </div>
            
            
            {/* <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Blog</h3>
              <a 
              
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 hover:text-blue-700 transition-colors duration-300"
              >
                
              </a>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

              </p>
            </div> */}

          </div> 
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'} mb-1`}>
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-medium shadow-lg hover:bg-purple-700 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitSuccess && (
                <div className="p-4 rounded-lg bg-green-100 text-green-800">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitError && (
                <div className="p-4 rounded-lg bg-red-100 text-red-800">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;