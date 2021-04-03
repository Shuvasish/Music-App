import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Lonely Waves",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14980",
      color: ["#281932", "#794D7A"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Cascade",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12152",
      color: ["#00312E", "#3D6D57"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sunrise Hike",
      cover: "https://i.scdn.co/image/ab67616d0000b273ccdcf06294e4503bd0530297",
      artist: "Ruck P",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12133",
      color: ["#4C1925", "#772928"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Traveling",
      cover: "https://i.scdn.co/image/ab67616d0000b273d9906598922442fe54e19b4d",
      artist: "Anbuu",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12137",
      color: ["#8D836B", "#225C56"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sailing on a Flying",
      cover: "https://i.scdn.co/image/ab67616d0000b27338601571cf234558e5da47db",
      artist: "Enzalla",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12152",
      color: ["#13332F", "#3E6E65"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Runaway",
      cover: "https://i.scdn.co/image/ab67616d0000b273742ad9194524c9723528bc05",
      artist: "Magnus",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12135",
      color: ["#4A1624", "#772A28"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Meadow",
      cover: "https://i.scdn.co/image/ab67616d0000b273d9906598922442fe54e19b4d",
      artist: "Azula",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12698",
      color: ["#34635A", "#8D836B"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
