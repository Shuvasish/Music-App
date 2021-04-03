import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { tractCondition } from "../util";

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  setSongs,
}) {
  //destructuring
  // const { audio, color, id, active } = currentSong;

  // use Effect
  useEffect(() => {
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSong);
  }, [currentSong]);
  //event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id;
    });
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        // playSongHandler();
        tractCondition(isPlaying, audioRef);
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      // playSongHandler();
    }
    tractCondition(isPlaying, audioRef);
    // console.log(currentIndex);
  };

  // helper function
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime || 0}
          onChange={dragHandler}
          type="range"
        />

        <p>{getTime(songInfo.duration - songInfo.currentTime)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipTrackHandler("skip-back")}
          size="2x"
          icon={faAngleLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="play"
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Player;
