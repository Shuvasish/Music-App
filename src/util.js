export const tractCondition = (isPlaying, audioRef) => {
  if (isPlaying) {
    audioRef.current.play();
  }
};
