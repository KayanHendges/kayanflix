import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer';
import dadosInicias from './data/dados_iniciais.json'

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain 
      url={dadosInicias.categorias[0].videos[0].url}
      videoTitle={dadosInicias.categorias[0].videos[0].titulo} 
      videoDescription={'OLá Freddie Mercury, Brian May, Roger Taylor e John Deacon formam a banda de rock Queen em 1970. Quando o estilo de vida agitado de Mercury começa a sair de controle, o grupo precisa encontrar uma forma de lidar com o sucesso e os excessos de seu líder.'}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosInicias.categorias[0]}
      />
      <Carousel
      category={dadosInicias.categorias[1]}
      />
      <Carousel
      category={dadosInicias.categorias[2]}
      />
      <Carousel
      category={dadosInicias.categorias[3]}
      />
      <Carousel
      category={dadosInicias.categorias[4]}
      />
      <Carousel
      category={dadosInicias.categorias[5]}
      />
      <Footer/>
    </div>
  );
}

export default App;
