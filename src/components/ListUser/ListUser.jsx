import  { useState, useEffect } from 'react';
import axios from 'axios';
import CardUser from '../CardUser/CardUser';
import './ListUser.css';
import { Link } from 'react-router-dom';

//:id valor dinamico. Para encontrar cada personaje.

export default function ListUser() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios('https://rickandmortyapi.com/api/character').then((res) =>
      setChars(res.data.results)
    );
  }, []);
  return (
    <main className='Card-List'>
      {chars.map((char) => {
        return (
          <div style={{ marign: 10 }} key={char.id}>
            <Link to={`/detail/${char.id}`}>
              <CardUser char={char} />
            </Link>            
          </div>
        );
      })}  
    </main>
  );
}