export default function Testimonials() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="space-y-4">
        <blockquote className="p-4 bg-white rounded-lg shadow">
          <p className="text-gray-700">
            &quot;The lawn care service was exceptional! My yard has never
            looked better.&quot;
          </p>
          <footer className="mt-2 text-sm text-gray-500">— Jane Doe</footer>
        </blockquote>
        <blockquote className="p-4 bg-white rounded-lg shadow">
          <p className="text-gray-700">
            &quot;Professional and reliable. Highly recommend for anyone needing
            lawn care.&quot;
          </p>
          <footer className="mt-2 text-sm text-gray-500">— John Smith</footer>
        </blockquote>
      </div>
    </div>
  );
}
