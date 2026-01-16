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
    <section className="py-12 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto">
          {/* Section Title - Compact */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 text-sm mb-6">
            Have a question? Send me a message
          </p>

          {/* Contact Form - Compact */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400/50 placeholder-gray-500 text-sm transition-all"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400/50 placeholder-gray-500 text-sm transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400/50 placeholder-gray-500 text-sm transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-5 py-2.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages - Compact */}
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                Message sent! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                Error sending message. Email me at{' '}
                <a href={`mailto:${personalInfo.email}`} className="underline hover:text-red-300">
                  {personalInfo.email}
                </a>
              </div>
            )}
          </form>

          {/* Direct Email Link - Compact */}
          <div className="mt-6 text-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary-400 hover:text-primary-300 transition-colors text-sm"
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

