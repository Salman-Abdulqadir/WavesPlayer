import { v4 as uuid } from "uuid";

const MusicLibrary = () => {
  return [
    {
      name: "Look away",
      author: "Odyssee Blumen",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=44900",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      id: uuid(),
      active: true,
      duration: "2:33",
      color: ["#1B617C", "#CBC0B2"],
    },
    {
      name: "Sleep Walker",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43902",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "2:26",
    },
    {
      name: "Cruising",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      author: "Evil Needle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=34242",
      color: ["#EC6F52", "#E6B04F"],
      id: uuid(),
      active: false,
      duration: "3:52",
    },
    {
      name: "Flight Mode",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43903",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "1:47",
    },
    {
      name: "Polaroid",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
      author: "Makzo, Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
      color: ["#B9D2DB", "#B5D0DA"],
      id: uuid(),
      active: false,
      duration: "2:18",
    },
    {
      name: "Orange Tree",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43904",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "0.54",
    },
    {
      name: "Rest Until Dark",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      author: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
      color: ["#C1DCD4", "#F9ECD5"],
      id: uuid(),
      active: false,
      duration: "2:30",
    },
    {
      name: "New Places",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43905",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "2:16",
    },
    {
      name: "Soulsounds",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      author: "Parkbench Epiphany",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
      color: ["#D79695", "#5E7B8A"],
      id: uuid(),
      active: false,
      duration: "2:30",
    },
    {
      name: "Envy You",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43906",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "2:18",
    },
    {
      name: "Seagulls",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
      author: "Misha, Zmeyev, Viktor Minsky",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
      color: ["#FFE8D0", "#D7CBC5"],
      id: uuid(),
      active: false,
      duration: "2:30",
    },
    {
      name: "Soft Spot",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43907",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "1:58",
    },

    {
      name: "Memory",
      author: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43908",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: uuid(),
      color: ["#9CECBE", "#C78485"],
      active: false,
      duration: "2:00",
    },
    {
      name: "Blessed",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      author: "Moods, Yasper",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
      color: ["#AFD5EC", "#6F3D2D"],
      id: uuid(),
      active: false,
      duration: "2:55",
    },
  ];
};
export default MusicLibrary;
