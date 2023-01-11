import React from 'react';
import {useActivities} from '../hooks/useActivities';
import '../styles/SearchBar.scss';

const SearchBar = () => {
    
    const {searchValue, setSearchValue, loading} = useActivities();
    
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return(
        <div className='searchBar'>
        <div className='searchBarTitle'>
            <p>Actividades</p>
        </div>
        <div className='searchBarContainer'>
            <div className='searchBarText'>
                <input 
                placeholder='Bailar, caminar, 
                actividades al aire libre'
                value={searchValue}
                onChange={onSearchValueChange}                
                />
            </div>
            <button>Buscar</button>
        </div>
    </div>

    )
};

export {SearchBar};