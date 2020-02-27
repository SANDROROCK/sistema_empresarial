import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import logo from '../../assets/Logo.png';


export default function Header() {
  return (
    <div className='main'>
      <img src={logo} alt='logoempresa'/>
      <div id="box-title"><h2>Painel do revendedor</h2></div>
      <ul>
          <li>Home</li>
          <li><a href='#sobre'>Sobre</a></li>
          <li>Produtos</li>
          <li>Revendas</li>
          <li>Contato</li>
      </ul>
    <form className="box-login">
      <label>CPF:</label>
      <input
      type="text"
       >
      
      </input>
      <label>Senha</label>
      <input 
      
      ></input>
      <button type="submit">Ok</button>
    </form>
    </div>
  );
}
