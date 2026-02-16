"use client";

import { useRef, useState, useCallback } from "react";
import { Play, Pause, Maximize } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  description?: string;
}

export function VideoPlayer({ src, poster, title, description }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleFullscreen = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {title && (
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl md:text-2xl text-foreground text-balance">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className="relative w-full overflow-hidden bg-foreground/5"
        style={{ aspectRatio: "16 / 9" }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        onTouchStart={() => setShowControls(true)}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="metadata"
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => {
            setIsPlaying(false);
            setShowControls(true);
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => {
            setIsPlaying(false);
            setShowControls(true);
          }}
        >
          <p>
            {"Votre navigateur ne supporte pas la lecture video. "}
            <a href={src} download className="underline text-accent">
              {"Telecharger la video"}
            </a>
          </p>
        </video>

        {/* Custom controls overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Play/Pause center button */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-background/90 backdrop-blur-sm text-foreground rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </button>
        </div>

        {/* Bottom controls bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 flex items-center justify-end p-3 md:p-4 bg-gradient-to-t from-foreground/40 to-transparent transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={handleFullscreen}
            className="flex items-center justify-center w-10 h-10 text-background/80 hover:text-background transition-colors"
            aria-label="Fullscreen"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
