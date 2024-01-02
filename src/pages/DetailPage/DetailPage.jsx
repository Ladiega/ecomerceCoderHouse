import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CardUser from "../../components/CardUser/CardUser";

export default function DetailPage() {
  const [char, setChar] = useState({});
  let { id } = useParams();

  console.log(char);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) =>
      setChar(json.data)
    );
  }, [id]);


  return (
    <main>
      <img src={char.image} alt=" character image" />
      <h1>{char.name}</h1>
      <h2>{char.gender}</h2>
      <p>{char.status }</p>

    </main>
  )
}