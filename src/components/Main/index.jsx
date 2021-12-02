import React from 'react';
import {MainStyle} from './style'
import photo from '../../assets/profile.jpeg'

function Main() {
  return (
    <MainStyle>
        <section className="box-1">
          <h3>Olá, eu sou o</h3>
          <h1>Rodolfo <br />Alves</h1>
          <p>Sou um apaixonado por tecnologia e Aspirante a Desenvolvimento Web Full Stack</p>
        </section>

        <section className="box-2">
            <figure className="my-photo">
              <img src={photo} alt="Minha foto" />
            </figure>
        </section>
    </MainStyle>
  )
}

export default Main;