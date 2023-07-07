import React, { useState, useEffect, useContext } from 'react';
import Pagination from './Pagination';
import Character from './Character';
import { Result } from '../interfaces';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { toTinyCharacterList } from '../helper';
import { MyContext } from '../context/context';
import axios from 'axios';



const CharacterList = () => {
	const { state, setState, setCharacterSelected } = useContext(MyContext);
  const [characters, setCharacters] = useState<Result[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    fetchData('https://rickandmortyapi.com/api/character');
  }, []);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      const { results, info } = response.data;

      setCharacters(results);
      setNextPage(info.next);
      setPrevPage(info.prev);
    } catch (error) {
    }
  };

  const handlePageChange = (page: string) => {
    fetchData(page);
  };


	const findById = (id: number): Result | undefined => {
		return characters.find((character) => character.id === id);
	};

  return (
    <div className='container'>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={toTinyCharacterList(characters)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="name" />}
				onChange={(event, value) => {
					if (value != null) {
						setCharacterSelected(findById(value.id));
						setState(true);
					} else {
						setState(false);
					}
				}}
        />
      <ul className='list-character'>
        {characters.map((character) => (
            <Character key={character.id} character={character} />
        ))}
      </ul>
      <Pagination nextPage={nextPage} prevPage={prevPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default CharacterList;
