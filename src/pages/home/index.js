import React from 'react';
import Header  from '../../components/header';
import Footer  from '../../components/footer';
import Sobre from '../../components/sobre';
import Produtos from '../../components/produtos';




import './style.css';



export default function Home() {
  return (
      <>
        <Header/>
        <div className='container'>
          
          <div id="box-container">
            <img src='http://laboremus.com.br/site/wp-content/uploads/2019/11/TCG15-2019.jpg' alt=''/>
            <img src='http://laboremus.com.br/site/wp-content/uploads/2018/08/mc1001n.jpg' alt=''/>
            <img src='http://laboremus.com.br/site/wp-content/uploads/2019/03/bl300pro-2.jpg' alt=''/>
          </div>
        </div>
        <Sobre/>
        <Produtos/>
        <Footer/>
        </>
  
  );
}
