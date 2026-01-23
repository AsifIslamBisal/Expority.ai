import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
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
  const [smsConsent, setSmsConsent] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
          subject: 'New Contact Form Submission',
          sms_consent: smsConsent ? 'Yes' : 'No'
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', location: '', message: '' });
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
    <div className="bg-linear-to-br from-white via-cyan-50/30 py-10 md:py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Info (Same for Desktop) */}
          <div className="space-y-6 md:space-y-8 md:pl-3">
            <div>
              <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-wider mb-2">
                CONTACT US
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch with<br className="hidden md:block" /> Our Team
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Reach out to our team for inquiries, project discussions, or partnership opportunities. We're here to provide.
              </p>
            </div>

            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[#3b82f6] hover:bg-blue-800 text-white px-5 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
            >
              Explore Now
            </button>

            <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
              <div>
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Email Address</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base ml-6 md:ml-7">contact@expority.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Customer Support</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base ml-6 md:ml-7">+1(647) 370-8928</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form (Optimized for Mobile) */}
          <div className="bg-white lg:ml-8 lg:w-xl rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-5 md:p-6 border border-gray-100">
            {/* Form Fields: Grid adjusts to 1 column on mobile to save space */}
            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 md:py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm`}
                  />
                  {errors.firstName && <p className="text-red-500 text-[10px] mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 md:py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm`}
                  />
                  {errors.lastName && <p className="text-red-500 text-[10px] mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm`}
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm`}
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" /> Location*
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className={`w-full px-4 py-2.5 md:py-3 rounded-xl border ${errors.location ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm`}
                />
                {errors.location && <p className="text-red-500 text-[10px] mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Write here..."
                  className="w-full px-4 py-2 md:py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-sm"
                ></textarea>
              </div>

              {/* Consent Box - Compact on Mobile */}
              <div className="flex items-start gap-3 bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  id="smsConsent"
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="smsConsent" className="text-[11px] md:text-sm text-gray-600 leading-tight md:leading-relaxed">
                  I agree to receive SMS messages from <span className="font-semibold">Expority AI</span>.
                  <br className="hidden md:block" /> Msg & data rates may apply. Reply <span className="font-semibold">STOP</span> to unsubscribe.
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending' || !smsConsent}
                className={`w-full px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm md:text-base ${
                  smsConsent ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl hover:-translate-y-0.5' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } disabled:opacity-50`}
              >
                {status === 'sending' ? (
                  <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> Sending...</>
                ) : (
                  <>Submit <Send className="w-4 h-4" /></>
                )}
              </button>

              {/* Status Notifications - Compact for Mobile */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 px-3 py-2 md:py-3 rounded-xl border border-green-200 text-xs md:text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <p className="font-medium">Message sent! We'll contact you soon.</p>
                </div>
              )}

              {(status === 'failed' || status === 'error') && (
                <div className={`flex items-center gap-2 px-3 py-2 md:py-3 rounded-xl border text-xs md:text-sm ${status === 'failed' ? 'text-red-700 bg-red-50 border-red-200' : 'text-amber-700 bg-amber-50 border-amber-200'}`}>
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p className="font-medium">{status === 'failed' ? 'Failed to send message.' : 'Please fill all required fields.'}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}