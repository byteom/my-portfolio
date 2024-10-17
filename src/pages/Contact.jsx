import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_iolrb4g';  // Replace with your EmailJS service ID
    const templateID = 'template_95nuaxq';  // Replace with your EmailJS template ID
    const publicKey = '59NKOVlH7xuQwHgUW';  // Replace with your EmailJS public key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('FAILED');
      });
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Display status after submission */}
      {status === 'SUCCESS' && (
        <p className="mt-4 text-center text-green-500">Your message has been sent successfully!</p>
      )}
      {status === 'FAILED' && (
        <p className="mt-4 text-center text-red-500">Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default Contact;
