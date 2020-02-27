import React from 'react';
import Chamada from '../../components/chamada';
import './styles.css';

export default function Produtos() {
  return (
      <>
    <a name="produtos"></a>

    <Chamada title="Linha de Produtos" />

    <div className="produtos-contaneir">

        <div id="box-linha">
          <h1>Agricola</h1>
          <div id="img-box">
            <img src='http://laboremus.com.br/site/wp-content/uploads/2019/03/lb2n-m.jpg' alt=''/>
          </div>
          <div id="text-box">
           A mais de 95 anos a Labomreus desenvolve e entrega soluções para o homen do campos,de pequeno ,médio e grande porte,
           soluções que proporcionam praticidade,produção adequada e segurança.Nosso garantia de entrega de máquinas de alta durabilidade.
           Picadores,fatiadores,ensiladeiras,balanças e outros mais.
          </div>
        </div>

        <div id="box-linha">
          <h1>Trituradores e Residuos</h1>
          <div id="img-box">
            <img src='http://laboremus.com.br/site/wp-content/uploads/2019/11/TCG15-2019.jpg' alt=''/>
          </div>
          <div id="text-box">
            Na ultima década a Laboremus  esteve preocupada ainda mais com o nosso meio ambiente,pensando nistos criamos uma linha de carater ambiental,
            possibilitando produtores rurais de médio e grande porte,orgãos publicos e privados ,
            na melhor maneira de reaproveitar o destinar residuos organicos e solidos.
          </div>
        </div>

        <div id="box-linha">
          <h1>Peças e Acessórios</h1>
          
          <div id="img-box">
            <img src='http://laboremus.com.br/site/wp-content/uploads/2018/05/fs2n_1.png' alt=''/>
            <img src='http://laboremus.com.br/catalogo/produtos/005833.png' alt=''/>
            <img src='http://laboremus.com.br/catalogo/produtos/005565.png' alt=''/>
          </div>
          <div id="text-box">
            Toda a nossa linha de produtos possui peças de reposição ou acessórios que foram desenvovido para otimizar o seu trabalho,
            nossas revendas sempre estão abastecidas de tais peças e acessórios para lhe garantir uma entrega rápida e eficaz.
          </div>
        </div>

    </div>
    </>
  );
}
