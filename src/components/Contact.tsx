import { personalInfo } from '../data/personalInfo';

/**
 * Contact section at the bottom of each page.
 * Displays phone and email for reaching out.
 */
const Contact = () => {
  return (
    <section className="py-16 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
            Contact Information
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Have a question or want to work together? Reach out by phone or email.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg text-primary-400 hover:text-primary-300 hover:border-primary-500/50 transition-colors"
              >
                <span className="text-gray-400">Phone:</span>
                <span className="font-medium">{personalInfo.phone}</span>
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg text-primary-400 hover:text-primary-300 hover:border-primary-500/50 transition-colors"
            >
              <span className="text-gray-400">Email:</span>
              <span className="font-medium">{personalInfo.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
