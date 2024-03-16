import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import Image from "next/image";
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [sound, setSound] = useState(null);
  const src = "/music.mp3";
  var howlConfig = {
    src: [src],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function () {
      console.log("Finished!");
    },
  };
  useEffect(() => {
    const storedPlayBackState = localStorage.getItem("audioPlayBackState");
    const initialPlaying = storedPlayBackState
      ? JSON.parse(storedPlayBackState)
      : true;
    setIsPlaying(initialPlaying);

    const newSound = new Howl(howlConfig);
    setSound(newSound);
    return () => {
      newSound.unload();
    };
  }, [src]);

  useEffect(() => {
    if (sound) {
      isPlaying ? sound.play() : sound.pause();
      localStorage.setItem("audioPlayBackState", JSON.stringify(isPlaying));
    }
  }, [isPlaying, sound]);
  const { play, pause } = {
    play: { name: "play", src: "/play.jpeg" },
    pause: { name: "pause", src: "/pause.jpg" },
  };

  const togglePlayPause = () => {
    if (sound) {
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div>
      <button onClick={togglePlayPause}>
        <Image
          src={isPlaying ? pause.src : play.src}
          alt={isPlaying ? pause.name : play.name}
          className="m-5"
          width={35}
          height={35}
        />
      </button>
    </div>
  );
}
