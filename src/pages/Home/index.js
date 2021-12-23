import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer';
import dadosInicias from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain 
      url={dadosInicias.categorias[0].videos[0].url}
      videoTitle={dadosInicias.categorias[0].videos[0].titulo} 
      videoDescription={'Clarence é um espírito candidato a anjo que recebe a missão de ajudar um homem muito valoroso, porém desiludido. George Bailey está à beira do suicídio quando é salvo por Clarence, que lhe mostra como ele é importante na vida de muitas pessoas.'}
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

export default Home;
