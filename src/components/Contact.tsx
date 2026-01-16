import { personalInfo } from '../data/personalInfo';
import { useState } from 'react';

/**
 * Contact Form Component
 * 
 * Contact form that appears at the bottom of each page.
 * You can integrate with services like Formspree, EmailJS, or your own backend API.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Integrate with your preferred form service
    // Example: Formspree, EmailJS, or your own backend API
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);

    // Example Formspree integration:
    // try {
    //   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     setSubmitStatus('error');
    //   }
    // } catch (error) {
    //   setSubmitStatus('error');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Have a question or want to work together? Send me a message!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder-gray-500 transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="contact-email" className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder-gray-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="contact-message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 placeholder-gray-500 transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                Something went wrong. Please try again or email me directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="underline hover:text-red-200">
                  {personalInfo.email}
                </a>
              </div>
            )}
          </form>

          {/* Direct Email Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Or reach out directly:</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

