import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, User, Mail, Phone, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [animationStep, setAnimationStep] = useState(0);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if it's between 10-15 digits (international format)
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
        
      case 'phone':
        if (value && !validatePhone(value)) {
          newErrors.phone = 'Please enter a valid phone number';
        } else {
          delete newErrors.phone;
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters';
        } else {
          delete newErrors.message;
        }
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Validate field on change
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedField('');
    // Validate field on blur
    validateField(name, value);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleSubmit = async () => {
    // Validate all fields before submission
    Object.keys(formData).forEach(key => {
      validateField(key, formData[key]);
    });

    // Check if there are any errors
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors || !isFormValid) {
      return;
    }
    
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `
🌟 *New Contact Form Submission* 🌟

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🏢 *Company:* ${formData.company}

💬 *Message:*
${formData.message}

---
Sent via WeReact Contact Form
    `.trim();

    // Replace with your WhatsApp number (include country code without +)
    const whatsappNumber = "+212645098691"; // Replace with your actual number
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Simulate form processing delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      
      // Reset form and errors
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setErrors({});
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message && 
                     validateEmail(formData.email) && 
                     (formData.phone ? validatePhone(formData.phone) : true) &&
                     Object.keys(errors).length === 0;

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br overflow-hidden" >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10rem] lg:text-[15rem] font-bold text-sage/5 select-none tracking-wider transform rotate-12">
            Contact
          </span>
        </div>

        {/* Floating Circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full border border-sage/20 transition-all duration-[3000ms] ease-in-out ${
              animationStep === i % 4 ? 'scale-125 opacity-30' : 'scale-100 opacity-10'
            }`}
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent transform -rotate-12" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent transform rotate-12" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-sage-deepest mb-6 tracking-tight">
              Let's Build Something
              <span className="block text-sage">Amazing Together</span>
            </h2>
            <p className="text-lg text-sage-dark max-w-2xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Drop us a message and let's start the conversation.
            </p>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-2xl border border-sage-light p-8 lg:p-12">
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="relative group">
                  <div className={`absolute left-3 top-4 transition-all duration-300 ${
                    focusedField === 'name' || formData.name ? 'text-sage' : 'text-sage-dark'
                  }`}>
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-white/50 border-2 rounded-xl text-sage-deepest placeholder-sage-dark focus:outline-none transition-all duration-300 ${
                      errors.name 
                        ? 'border-red-400 focus:border-red-500' 
                        : focusedField === 'name' 
                          ? 'border-sage shadow-lg scale-[1.02]' 
                          : 'border-sage-light hover:border-sage'
                    }`}
                    placeholder="Your Name"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    errors.name 
                      ? 'w-full bg-red-400' 
                      : focusedField === 'name' 
                        ? 'w-full bg-sage' 
                        : 'w-0 bg-sage'
                  }`} />
                  {errors.name && (
                    <p className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group mb-8">
                  <div className={`absolute left-3 top-4 transition-all duration-300 ${
                    focusedField === 'email' || formData.email ? 'text-sage' : 'text-sage-dark'
                  }`}>
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-white/50 border-2 rounded-xl text-sage-deepest placeholder-sage-dark focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-400 focus:border-red-500' 
                        : focusedField === 'email' 
                          ? 'border-sage shadow-lg scale-[1.02]' 
                          : 'border-sage-light hover:border-sage'
                    }`}
                    placeholder="your@email.com"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    errors.email 
                      ? 'w-full bg-red-400' 
                      : focusedField === 'email' 
                        ? 'w-full bg-sage' 
                        : 'w-0 bg-sage'
                  }`} />
                  {errors.email && (
                    <p className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative group mb-8">
                  <div className={`absolute left-3 top-4 transition-all duration-300 ${
                    focusedField === 'phone' || formData.phone ? 'text-sage' : 'text-sage-dark'
                  }`}>
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className={`w-full pl-12 pr-4 py-4 bg-white/50 border-2 rounded-xl text-sage-deepest placeholder-sage-dark focus:outline-none transition-all duration-300 ${
                      errors.phone 
                        ? 'border-red-400 focus:border-red-500' 
                        : focusedField === 'phone' 
                          ? 'border-sage shadow-lg scale-[1.02]' 
                          : 'border-sage-light hover:border-sage'
                    }`}
                    placeholder="Your Phone (Optional)"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    errors.phone 
                      ? 'w-full bg-red-400' 
                      : focusedField === 'phone' 
                        ? 'w-full bg-sage' 
                        : 'w-0 bg-sage'
                  }`} />
                  {errors.phone && (
                    <p className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div className="relative group mb-8">
                  <div className={`absolute left-3 top-4 transition-all duration-300 ${
                    focusedField === 'company' || formData.company ? 'text-sage' : 'text-sage-dark'
                  }`}>
                    <Building size={20} />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    className={`w-full pl-12 pr-4 py-4 bg-white/50 border-2 rounded-xl text-sage-deepest placeholder-sage-dark focus:outline-none transition-all duration-300 ${
                      focusedField === 'company' ? 'border-sage shadow-lg scale-[1.02]' : 'border-sage-light hover:border-sage'
                    }`}
                    placeholder="Company Name (Optional)"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-sage transition-all duration-300 ${
                    focusedField === 'company' ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative group mb-8">
                <div className={`absolute left-3 top-4 transition-all duration-300 ${
                  focusedField === 'message' || formData.message ? 'text-sage' : 'text-sage-dark'
                }`}>
                  <MessageCircle size={20} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className={`w-full pl-12 pr-4 py-4 bg-white/50 border-2 rounded-xl text-sage-deepest placeholder-sage-dark focus:outline-none resize-none transition-all duration-300 ${
                    errors.message 
                      ? 'border-red-400 focus:border-red-500' 
                      : focusedField === 'message' 
                        ? 'border-sage shadow-lg scale-[1.02]' 
                        : 'border-sage-light hover:border-sage'
                  }`}
                  placeholder="Tell us about your project..."
                />
                <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  errors.message 
                    ? 'w-full bg-red-400' 
                    : focusedField === 'message' 
                      ? 'w-full bg-sage' 
                      : 'w-0 bg-sage'
                }`} />
                {errors.message && (
                  <p className="absolute -bottom-6 left-0 text-red-500 text-sm font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || isSubmitting}
                  className={`group relative px-12 py-4 bg-sage text-white rounded-xl font-semibold text-lg transition-all duration-300 ${
                    !isFormValid || isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-sage-dark hover:scale-105 hover:shadow-2xl active:scale-95'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Preparing Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send via WhatsApp</span>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                  
                  {/* Button Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-sage opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl ${
                    !isFormValid || isSubmitting ? 'hidden' : ''
                  }`} />
                </button>
              </div>
            </div>

            {/* WhatsApp Info */}
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
              <div className="flex items-center justify-center space-x-2 text-green-700">
                <MessageCircle size={20} />
                <span className="text-sm font-medium">
                  Your message will open in WhatsApp for secure, direct communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection  = ({
  sectionNumber = "04",
  title = "CONTACT US",
  subtitle = "EACH PROJECT REPRESENTS OUR COMMITMENT TO EXCELLENCE AND INNOVATION.",
}) => {

  return (
    <section className="bg-sage-light py-16 space-y-6 px-6 h-min-screen" id='contact'>
      <div className="">
        {/* Header */}
        <div className="">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-sage-darker/60 text-lg font-light">
              /{sectionNumber}
            </span>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-sage-deepest mb-4">
                {title}
              </h2>
              <p className="text-sage-darker text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-sage-light">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default ContactSection ;

