export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Our Lawn Care Service
      </h1>
      <p className="text-lg mb-6">
        We provide top-notch lawn care services to keep your yard looking its
        best.
      </p>
      <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
        Get Started
      </button>
    </div>
  );
}
