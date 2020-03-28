import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[value, setValue] = useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
      history.push('/profile');
    }catch(err){
      alert('erro ao cadastrar novo caso, tente novamente');
    }
  }

  return(
    <div className="new-incident-container">

    <div className="content">
      <section>
        <img src={logoImg} alt="be the hero"/>

        <h1>cadastrar novo caso</h1>
        <p>descreva o caso detalhadamente...</p>
        <Link className="back-link" to = "/profile">
          <FiArrowLeft size={16} color="#e02041"/>
          voltar para home
        </Link>
      </section>
      <form onSubmit={handleNewIncident}>
        <input
          placeholder="título do caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea 
        placeholder="descrição"
        value ={description}
        onChange={e => setDescription(e.target.value)}
        />
        <input
          placeholder="valor em reais"
          value ={value}
          onChange={e => setValue(e.target.value)}
        />
        
        <button className="button" type="submit">cadastrar</button>

      </form>
    </div>

  </div>
  )
}