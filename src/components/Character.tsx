import React from 'react';
import { Result } from '../interfaces';

interface CharacterProps {
    character: Result;
  }

const Character: React.FC<CharacterProps> = ({character}) => {
  return (
    <li className="link-card" key={character.id}>
        <div>
            <h2>
                Nombre: {character.name}
                <span>&rarr;</span>
            </h2>
            <img src={character.image} alt={character.name} />
            <ul>
            <li>Origin: {character.origin.name}</li>
            <li>Specie: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
            <li>Url: <a href={character.url}>{character.url}</a></li>
            </ul>
        </div>
    </li>
  );
};

export default Character;
