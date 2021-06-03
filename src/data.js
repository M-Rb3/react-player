import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      artist: "Philanthrope, chromonicci",
      name: "Wildlife",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#221314", "#732B26"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10261",
    },
    {
      artist: "Mama Aiuto",
      name: "Today Feels Like Everyday",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#133737", "#598281"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12126",
    },
    {
      artist: "Aiguille",
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#645691", "#F6B7AE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10551",
    },
    {
      artist: "Swørn",
      name: "Fox",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#2F1148", "#CE6581"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6550",
    },
    {
      artist: "Tesk",
      name: "Hideout",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/669e6ed53ce0d385e072ea9c77d159297bbca41f-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E2925D", "#D77B73"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2096",
    },
    {
      artist: "Blue Wednesday, Shopan",
      name: "Day One",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#1F214B", "#9077B6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11230",
    },
  ];
}

export default chillHop;
