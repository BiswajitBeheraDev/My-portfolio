export default function Contact() {
  return (
      <div className="flex justify-center bg-gray-900 text-white py-12">
      <section className="max-w-3xl mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-400">Contact Me</h2>
        <form className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-4 border border-gray-700">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-6 text-gray-400">
          <p>Email: beherabiswajit344@gmail.com</p>
          <p>Phone: +91 6371675164</p>
        </div>
      </section>
    </div>
  );
}