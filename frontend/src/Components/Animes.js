import Anime from "./Anime";
import { useEffect, useState } from "react";

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const API = process.env.REACT_APP_API_URL;

  const [ animes, setAnimes ] = useState([]);

  useEffect(() => {
    fetch(`${API}/animes`)
    .then((response) => response.json())
    .then((responseJSON) => setAnimes(responseJSON))
    .catch((error) => console.error(error));
  }, []);

  return (
    <section className="index" id="anime-list">
      {!animes.length ? <p>No animes to display</p>
      :
      animes.map(anime => <Anime key={anime.id} name={anime.name} description={anime.description}/>)
      }
    </section>
  );
}

export default Animes;
