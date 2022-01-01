import React from 'react';
import {Container, HeaderWorks, ContainerGrid, Row} from './style'
import SettingsIcon from '../../assets/settings.svg'
import FrontIcon from '../../assets/front.svg'
import TableIcon from '../../assets/table.svg'
import ManageIcon from '../../assets/manage.svg'
import MainIcon from '../../assets/main.svg'
import PalleteIcon from '../../assets/pallete.svg'

export function Works() {
  return (
      <>
        <Container>
            <HeaderWorks>
                <h3>Serviços</h3>
                <h1>Qualidade & Eficiência</h1>
            </HeaderWorks>

            <ContainerGrid>
                <Row>
                    <div>
                        <span><img src={SettingsIcon} alt="Back-end" /></span>
                        <h3>Desenvolvimento Back-end</h3>
                        <p>Integração com front usando tecnologias como NodeJs ou Golang</p>
                    </div>

                    <div>
                        <span><img src={FrontIcon} alt="Front-end" /></span>
                        <h3>Desenvolvimento Front-end</h3>
                        <p>Criação de sites usandos frameworks com ReactJs, Bootstrap ou puramente HTML5, CSS3 e JS</p>
                    </div>

                    <div>
                        <span><img src={PalleteIcon} alt="Palheta" /></span>
                        <h3>Prototipagem</h3>
                        <p>Prototipagem de sites ou sistemas usando Wireframes de baixa e alta fidelidade</p>
                    </div>
                </Row>

                <Row>
                    <div>
                        <span><img src={TableIcon} alt="Tabela" /></span>
                        <h3>Modelagem de BD</h3>
                        <p>Modelagem de Banco de dados desde a fase conceitual, passando pela lógica e por fim, a Física.</p>
                    </div>

                    <div>
                        <span><img src={ManageIcon} alt="Pessoa engranagem" /></span>
                        <h3>Manutenção Front</h3>
                        <p>Prestação de serviço de manunteção para sites ou sistemas que usam ReactJs ou Bootstra.p</p>
                    </div>

                    <div>
                        <span><img src={MainIcon} alt="Manutenção" /></span>
                        <h3>Manutenção Back</h3>
                        <p>Prestação de serviço de manutenação para sites ou sistemas que usam NodeJs em seu back-end. </p>
                    </div>
                </Row>

            </ContainerGrid>

        </Container>
      </>
  );
}

