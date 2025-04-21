import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);
  const [playedVideos, setPlayedVideos] = useState(new Set());
  const playerRef = useRef(null);

  const chapters = [
    { title: "Yoga for Beginners", videoId: "yUBzHThl-d0" }, // Adriene - Beginner
    { title: "Morning Yoga Flow", videoId: "8YvzKN5GQ5I" }, // Boho Beautiful
    { title: "Yoga for Flexibility", videoId: "16u9UJekrG0" }, // Adriene - Flexibility
    { title: "Yoga for Relaxation", videoId: "cTix9GFQQnw" }, // Slow Stretch
    { title: "Stress Relief Yoga", videoId: "O6yzHkoDXZ8" }, // Calm stress relief
    { title: "Bedtime Yoga Routine", videoId: "RI5gOBeTqyE" }, // Bedtime wind-down
    { title: "Quick Yoga Break", videoId: "dxoY1i6alSk" }, // 5 min yoga break
  ];
  

  // Load YouTube Iframe API once
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      createPlayer(chapters[currentChapter].videoId);
    };
  }, []);

  // Re-create player when chapter changes
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      createPlayer(chapters[currentChapter].videoId);
    }
  }, [currentChapter]);

  // Create new player instance
  const createPlayer = (videoId) => {
    if (playerRef.current) {
      playerRef.current.destroy(); // remove old player
    }

    playerRef.current = new window.YT.Player("youtube-player", {
      height: "390",
      width: "100%",
      videoId,
      events: {
        onStateChange: onPlayerStateChange,
        onError: (event) => {
          console.error("YouTube Player Error:", event.data);
          alert("This video couldn't be played. Try again later.");
        },
      },
    });
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      const currentVideoId = chapters[currentChapter].videoId;
      setPlayedVideos((prev) => new Set([...prev, currentVideoId]));
    }
  };

  const progress = (playedVideos.size / chapters.length) * 100;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 border-r border-gray-200 sticky top-0 h-screen">
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-600 mb-2">
            {Math.round(progress)}% Complete
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-green-600 rounded-full h-2"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <nav>
          {chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setCurrentChapter(index)}
              className={`w-full text-left p-2 mb-1 rounded-md flex items-center
                ${currentChapter === index
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "hover:bg-gray-200"}
                ${playedVideos.has(chapter.videoId) ? "text-gray-800" : "text-gray-500"}`}
            >
              {playedVideos.has(chapter.videoId) && (
                <span className="mr-2 text-green-600">✓</span>
              )}
              <span>
                Chapter {index < 9 ? `0${index + 1}` : index + 1} | {chapter.title}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <button
          className="mb-6 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate(-1)}
        >
          &larr; Back to Cart
        </button>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            {chapters[currentChapter].title}
          </h2>

          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <div id="youtube-player"></div>

</div>

        </div>
      </div>
    </div>
  );
};

export default Learn;
