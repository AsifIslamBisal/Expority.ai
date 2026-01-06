import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '83625c8d-c340-47cb-915d-370608a0699f', 
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          message: formData.message || 'No message provided',
          subject: 'New Contact Form Submission'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('failed');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-gray-500 tracking-wider mb-2">
                CONTACT US
              </p>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Get in Touch with<br />Our Team
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Reach out to our team for inquiries, project discussions, or partnership opportunities. We're here to provide.
              </p>
            </div>

            <button 
              onClick={() => window.location.href = '/'}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Now
            </button>

            <div className="space-y-6 pt-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Email Address</h3>
                </div>
                <p className="text-gray-600 ml-7">contact@expority.com</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Customer Support</h3>
                </div>
                <p className="text-gray-600 ml-7">+1 647-496-0906</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Location*
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.location ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 text-green-700 bg-green-50 px-4 py-3 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm text-green-600">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {status === 'failed' && (
                <div className="flex items-center gap-3 text-red-700 bg-red-50 px-4 py-3 rounded-xl border border-red-200">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Failed to send message</p>
                    <p className="text-sm text-red-600">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 text-amber-700 bg-amber-50 px-4 py-3 rounded-xl border border-amber-200">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Please fill all required fields</p>
                    <p className="text-sm text-amber-600">Check the form and try again.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}