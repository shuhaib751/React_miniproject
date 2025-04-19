import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1000px] mx-auto pt-8 px-4">
      <button
        className="mb-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        onClick={() => navigate(-1)} // Go back to previous page
      >
        &larr; Back to Cart
      </button>

      <h2 className="text-3xl font-bold mb-6 text-green-700">Yoga Learning Center</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Yoga Video 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Morning Yoga Flow</h3>
          <div className="aspect-video mb-3">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/8YvzKN5GQ5I?si=LGV759aNkGZT06nS"
              title="Morning Yoga"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-600">
            Start your day with this 15-minute energizing yoga sequence. Perfect for beginners, 
            this flow will help improve flexibility and boost your energy levels.
          </p>
        </div>

        {/* Yoga Video 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Stress Relief Session</h3>
          <div className="aspect-video mb-3">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/cTix9GFQQnw?si=SMEJb1aruFYSXuyY"
              title="Stress Relief Yoga"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-600">
            20-minute gentle yoga practice to release tension and calm the mind. 
            Ideal for evening practice or whenever you need to decompress.
          </p>
        </div>

         {/* Yoga Video 1 */}
         <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Morning Yoga Flow</h3>
          <div className="aspect-video mb-3">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/8YvzKN5GQ5I?si=LGV759aNkGZT06nS"
              title="Morning Yoga"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-600">
            Start your day with this 15-minute energizing yoga sequence. Perfect for beginners, 
            this flow will help improve flexibility and boost your energy levels.
          </p>
        </div>
      </div>


      <div className="mt-8 bg-green-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Benefits of Regular Yoga Practice</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improves flexibility and balance</li>
          <li>Reduces stress and anxiety levels</li>
          <li>Enhances mental focus and clarity</li>
          <li>Strengthens core muscles</li>
          <li>Promotes better sleep quality</li>
        </ul>
      </div>
    </div>
  );
};

export default Learn;