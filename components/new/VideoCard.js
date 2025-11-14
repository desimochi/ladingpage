"use client";
import { useState } from "react";

export default function VideoCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Thumbnail */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="https://taxila.in/media/gallery/57.jpg" // replace with actual thumbnail
          alt="Life & Learning"
          className="w-full h-80 object-cover "
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[800px] h-[450px] bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* YouTube Iframe */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/jcsV5HJN9Rw?autoplay=1" // replace with your video ID
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
