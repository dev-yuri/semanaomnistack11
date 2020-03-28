import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';

import './styles.css'

import heroesImage from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
  const [id, setID] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });
      console.log(response.data.name);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero" />

        <form onSubmit={handleLogin}>
          <h1>faça seu logon</h1>
          <input
            placeholder="sua id"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <button className="button" type="submit">eEntrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            não tenho cadastro
          </Link>
        </form>

      </section>
      <img src={heroesImage} alt="heroes" />
    </div>
  );
}