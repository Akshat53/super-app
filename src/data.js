import western from "./assets/categories/western.png";
import action from "./assets/categories/action.png";
import thriller from "./assets/categories/thriller.png";
import horror from "./assets/categories/horror.png";
import romance from "./assets/categories/romance.png";
import fantasy from "./assets/categories/fantasy.png";
import drama from "./assets/categories/drama.png";
import music from "./assets/categories/music.png";
import fiction from "./assets/categories/fict ion.png";

export const categoryOptions = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "100%", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
];
