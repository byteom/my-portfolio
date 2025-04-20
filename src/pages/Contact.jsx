import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const serviceID = 'service_iolrb4g';      // Your EmailJS service ID
    const templateID = 'template_95nuaxq';    // Your EmailJS template ID
    const publicKey = '59NKOVlH7xuQwHgUW';    // Your EmailJS public key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('FAILED');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="font-mono p-8 max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-8 text-center">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Status message */}
      {status === 'SUCCESS' && (
        <p className="mt-6 text-center text-green-500">
          ✅ Your message has been sent successfully!
        </p>
      )}
      {status === 'FAILED' && (
        <p className="mt-6 text-center text-red-500">
          ❌ Oops! Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default Contact;
