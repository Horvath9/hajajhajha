import React from 'react'
import { useState } from 'react'
import { inserirAnime } from '../../api/animepi.js';
import { Link } from 'react-router-dom';
import './index.css'
export default function Inserir() {
    const [text, setText] = useState('');
    
    
    async function inserir() {
        if(!text.trim()){
            alert('Digite um texto valido!');
        }else{
            const resposta = await inserirAnime(text);
            setText('');
            alert('Anime cadastrado com sucesso!');
        }
    }
    return (
    <div className='sitepapi'>
        <input className='inputa'  type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        <button onClick={inserir}> post </button>
        <Link to='/'> back to back </Link>
    </div>
  )
}  