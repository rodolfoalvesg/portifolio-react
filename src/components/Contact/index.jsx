import React from 'react';
import {Container, HeaderContact, ContainerContacts, CardsContact, ContainerForm} from './style'
import LocationImg from '../../assets/location.svg';
import PostImg from '../../assets/post.svg';
import PhoneImg from '../../assets/phone.svg';


function Contact() {
  return (
    <Container>
        <HeaderContact>
            <h3>Contato</h3>
            <h1>Agendamentos & Contatos</h1>
        </HeaderContact>

        <ContainerContacts>
            <div className="box">
                <CardsContact>
                    <span className="circle">
                        <img src={ PhoneImg} alt="Telefone" />
                    </span>
                    <div>
                         <h3>Ligue</h3>
                        <p>(83) 9 3300 8375</p> 
                    </div>
                </CardsContact>

                <CardsContact>
                    <span className="circle">
                        <img src={ PostImg} alt="Email" />
                    </span>
                    <div>
                        <h3>E-mail</h3>
                        <p>rodolfoalves.inf@gmail.com</p> 
                    </div>
                </CardsContact>

                <CardsContact>
                    <span className="circle">
                        <img src={LocationImg} alt="Localização" />
                    </span>
                    <div>
                        <h3>Endereço</h3>
                        <p>R. Antônio de Souza Lopes, 87, Campina Grande - PB</p> 
                    </div>
                </CardsContact>
            </div>

            <div className="box">
                <ContainerForm>

                   
                        <div className="row">
                            <input type="text" placeholder="Seu Nome"/> 
                            <input type="email" placeholder="Seu Email"/>
                        </div>
    
                        <div className="row">
                            <input type="tel" placeholder="Seu Telefone"/> 
                            <input type="text" placeholder="Assunto"/>
                        </div>

                        <div className="row-text">
                            <textarea placeholder="Sua mensagem aqui" rows="6">

                            </textarea>
                        </div>

                        <button type="submit">ENVIAR AGORA</button>
        
                    
                </ContainerForm>
            </div>
        </ContainerContacts>

        
    </Container>
    );
}

export default Contact;