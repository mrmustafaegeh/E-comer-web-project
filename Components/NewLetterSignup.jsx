const NewsletterSignup = () => (
  <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      Join Our Community
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      Sign up for our newsletter and get 10% off your first order plus exclusive
      deals!
    </p>
    <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterSignup;
