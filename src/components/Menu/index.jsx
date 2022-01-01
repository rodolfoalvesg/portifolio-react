import React from 'react';
import { NavStyle } from './style';
import about from '../../assets/list.png';
import agenda from '../../assets/agenda.png';
import mala from '../../assets/mala.png';
import servicos from '../../assets/servicos.png';
import email from '../../assets/email.png';

export function Menu(props) {
  
  function Options(value){
    props.onSelectComponent(value)
    props.onOpenNewPageModal()
  }

  return (
      <NavStyle>
          <ul>
            <button onClick={()=> (Options(1))}><li><img src={about} alt="Sobre mim"/><span>Perfil</span></li></button>
            <button onClick={()=> (Options(2))}><li><img src={agenda} alt="Experiências"/><span>Experiências</span></li></button>
            <button onClick={()=> (Options(3))}><li><img src={mala} alt="Portifólio"/><span>Portifólio</span></li></button>
            <button onClick={()=> (Options(4))}><li><img src={servicos} alt="Serviços"/><span>Serviços</span></li></button>
            <button onClick={()=> (Options(5))}><li><img src={email} alt="Contato"/><span>Contato</span></li></button>
          </ul>
      </NavStyle>
  );
}
