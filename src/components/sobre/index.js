import React from 'react';
import Chamada from '../../components/chamada';
import './style.css';

export default function Sobre() {
  return (
    <>
      <a name="sobre"></a>
      <Chamada title="Sobre a Laboremus" />
      <div className="sobre-container">
        <div id="foto-text">
          <h3>Fabiano Dias</h3>
          <strong>Diretor Comercial</strong>
          <p>loreokdomds jdisj dijidjisajdi sjdisaj disjaidjs diadasu dsuahdushdao djimdiqjcidmjiqcomqjicj</p>
        </div>
        <div id="foto_bg"></div>

        <div id="foto_bg"></div>
        <div id="foto-text">
          <h3>Marcos Valerio</h3>
          <strong>Diretor Produção</strong>
          <p>oreokdomds jdisj dijidjisajdi sjdisaj disjaidjs diadasu dsuahdushdao djimdiqjcidmjiqcomqjicj</p>

        </div>
      </div>
    </>
  );
}
