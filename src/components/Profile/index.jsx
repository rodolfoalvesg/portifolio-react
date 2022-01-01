import React from 'react';
import {Container, Section, CardProfile} from './style'
import myPhoto2 from '../../assets/profile-2.jpeg';


export function Profile() {
  return (
    <Container>
        <Section className="profile-box-1">
            <figure>
               <img src={myPhoto2} alt="" srcset="" />
            </figure>

            <CardProfile>
                <ul>
                    <li>
                        <h3>Nome</h3>
                        <span>Rodolfo Alves</span>
                    </li>
                    <li>
                        <h3>Aniversário</h3>
                        <span>21 de Março</span>
                    </li>
                    <li>
                        <h3>Email</h3>
                        <span>rodolfoalves.inf@gmail.com</span>
                    </li>
                    <li>
                        <h3>Telefone</h3>
                        <span>83 9 3300-8375</span>
                    </li>
                    <li>
                        <h3>Endereço</h3>
                        <span>Campina Grande, PB</span>
                    </li>
                    <li>
                        <h3>Nacionalidade</h3>
                        <span>Brasileira</span>
                    </li>
                </ul>
               
            
            </CardProfile>
        </Section>
            
        <Section className="profile-box-2">
            <h3>Sobre mim</h3>
            <h1>Jr Web Developer</h1>
            <p>
            Oi! Meu nome é <strong>Rodolfo Alves</strong>. Sou Web Developer e sou muito apaixonado e dedicado ao meu trabalho. Estou em constante aprendizado, buscando novos conhecimentos acerca das melhores e mais usadas tecnologias do mercado.
            </p>

           <a href="https://drive.google.com/file/d/1thPWrghiZkL_hMUwk2vIQbqKJT43js9T/view?usp=sharing" target="blank">DOWNLOAD CV</a>
        </Section>
    </Container>
  );
}
