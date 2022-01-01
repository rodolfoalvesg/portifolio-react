import React from 'react';
import {Container, HeaderProfile, Section, CardExperiences, HeaderCards} from './style'
import ProgressBar from '../ProgressBar'


export function Experience() {
  return (
      <Container>
        <HeaderProfile>
          <h3>Resumo</h3>
          <h1>Educação & Habilidades</h1>
        </HeaderProfile>

        <Section>
          <div className="box-1">
              <HeaderCards>
                <h2>Educação</h2>
                <span className="shape"></span>
              </HeaderCards>
              
                <CardExperiences>
                  <h3>Web Full Stack</h3>
                  <span>Alpha Edtech</span>
                  <p>Curso prático voltado para o desenvolvimento web.</p>
                  <span className="data">2021 - 2022</span>
                </CardExperiences>
                
                <CardExperiences>
                  <h3>CTD - Certified Tech Developer</h3>
                  <span>Digital House</span>
                  <p>Certificação em Web Full Stack, desenvolvida por parceiros como Mercado Livre e Globant.</p>
                  <span className="data">2021 - 2023</span>
                </CardExperiences>

                <CardExperiences>
                  <h3>Engenharia de Software</h3>
                  <span>Ampli Educacional</span>
                  <p>Curso Superior de Engenharia de Software.</p>
                  <span className="data">2021 - 2024</span>
                </CardExperiences>

              <HeaderCards>
                <h2>Experiências</h2>
                <span className="shape"></span>
              </HeaderCards>

          <CardExperiences>
              <h3>Aprendiz</h3>
              <span>Alpha Edtech - Stone</span>
              <p>Aprendiz de Desenvolvimento Web participando de projetos de aprendizado e projetos reais utilizando linguagens: Go Lang, Javascript, HTML5, CSS3, NodeJs, ReactJs, PostgreSQL, JQuery e TypeScript. Banco de dados: PostgreSQL. Desenvolvimento softskills. Monitoria voluntária entre outras ações.</p>
              <span className="data">Fev/2021 - Hoje</span>
          </CardExperiences>

          <CardExperiences>
              <h3>Suporte Help-Desk</h3>
              <span>Stefanini It Solutions</span>
              <p>Prestação de suporte técnico a usuários de produtos da marca D-Link Brasil.
              Produtos/Serviços Suportados: Modens, roteadores, switchs, câmeras IP, configurações de compatibilidade para windows, mac ios e linux.
              Escopo das Funções desempenhadas: Suporte e Configuração, Análise para Identificação de Defeitos, Abertura de Chamados para Nível Superior e Abertura de Procedimento de Garantia.</p>
              <span className="data">Mar/2015 - Out/2017</span>
          </CardExperiences>

          <CardExperiences>
          <h3>Operador de Retenção</h3>
                <span>AeC S/a</span>
                <p>Suporte e Retenção de usuários de serviços de TV, Internet e Telefonia Fixa.
                Escopo de Funções desempenhadas:
                Atendimento N1: Suporte e informações de nível básico; informações sobre fatura e serviços.
                Atendimento de Retenção: Suporte Especializado em retenção de clientes por matriz de argumentação e/ou negociação conforme demanda atendida.
                Treinamento de N1: Aplicação de Treinamento em implantação de Unidade na cidade de Mossoró/RN. Acompanhamento de treinandos através de análise de perfil e desempenho e preenchimento de dossiês.</p>
                <span className="data">Mai/2012 - Jun/2014</span>
          </CardExperiences>
              

          </div>

          <div className="box-2">
            
            <HeaderCards>
              <h2> Hard Skills</h2>
              <span className="shape"></span>
            </HeaderCards>
            
            <CardExperiences>
                <h3>Javascript</h3>
                <ProgressBar value="85" />

                <h3>GoLang</h3>
                <ProgressBar value="35" />

                <h3>HTML5</h3>
                <ProgressBar value="95" />

                <h3>CSS3</h3>
                <ProgressBar value="85" />

                <h3>NodeJs</h3>
                <ProgressBar value="50" />

                <h3>ReactJs</h3>
                <ProgressBar value="70" />


                <h3>TypeScript</h3>
                <ProgressBar value="25" />

                <h3>Git e GitHub</h3>
                <ProgressBar value="70" />

                <h3>JQuery</h3>
                <ProgressBar value="60" />

                <h3>Banco de Dados</h3>
                <ProgressBar value="75" />

            </CardExperiences>

              
          </div>
        </Section>




       
      </Container>
  );
}
