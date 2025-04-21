import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center text-green-700">Welcome to Inner PEACE</h1>
      <p className="max-w-2xl text-center text-lg text-gray-700">
        Yoga is a journey of the self, through the self, to the self. It’s a holistic approach to physical,
        mental, and spiritual well-being. Through asanas (poses), breathing techniques, and meditation, yoga
        helps in building strength, flexibility, and inner peace.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <img
          src="https://images.unsplash.com/photo-1554311885-84c5b5bfa77d"
          alt="Yoga Pose 1"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518611012118-f7f3c333b4d1"
          alt="Yoga Pose 2"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1552068751-34cb5cf055b0"
          alt="Yoga Pose 3"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
