import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('erro no cadastro, tente novamente');
    }
  }

  return (
    <div className="register-container">

      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />

          <h1>cadastro</h1>
          <p>faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem...</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            voltar para o logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="nome da ong"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="uf"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">cadastrar</button>

        </form>
      </div>

    </div>
  )
}