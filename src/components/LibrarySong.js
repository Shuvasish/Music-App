import React from "react";

function LibrarySong({
  id,
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) {
  const { name, cover, artist } = song;
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.current.play();
    }
    //add active status
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(newSong);
    // console.log(newSong);
  };

  return (
    <div
      className={song.active ? "selected library-song" : "library-song"}
      onClick={songSelectHandler}
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
