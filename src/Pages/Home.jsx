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
          src="images.jpeg"
          alt="Yoga Pose 1"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
        <img
          src="download.jpeg"
          alt="Yoga Pose 2"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
        <img
          src="images (1).jpeg"
          alt="Yoga Pose 3"
          className="rounded-2xl shadow-lg w-full h-64 object-cover"
        />
        <video
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
>
  <source src="video_preview_h264.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
    </div>
  );
};

export default Home;
