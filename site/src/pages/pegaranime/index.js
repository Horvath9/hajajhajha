import React from 'react'
import { useState, useEffect } from 'react';
import './index.css'
import { consultarAnime } from '../../api/animepi.js';

import { Link } from 'react-router-dom';



export default function Consult() {
    const [anime, setAnimes] = useState([]);

    async function consult() {
        const resposta = await consultarAnime() 
        setAnimes(resposta);       
    }

    useEffect(() => {
        consult();
    }, [])
    return (
    <div  className='main'>
        <div>
            <table className='ta'>
                <thead>
                    <tr>
    
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {anime.map(item => 
                      
                            <tr>
                                <td> {item.nm_anime} </td>
                            </tr>     
                        )
                    }
                </tbody>
            </table>
            <Link to='/postaranime' className='butao'> post </Link>
        </div>
    </div>
  )
}