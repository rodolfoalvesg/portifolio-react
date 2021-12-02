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
  }

  

  return (
      <NavStyle>
          <ul>
            <a href="#" onClick={()=> (Options(1), props.onOpenNewPageModal())}><li><img src={about} alt="Sobre mim"/><span>Perfil</span></li></a>
            <a href="#" onClick={()=> (Options(2), props.onOpenNewPageModal())}><li><img src={agenda} alt="Experiências"/><span>Experiências</span></li></a>
            <a href="#" onClick={()=> (Options(3), props.onOpenNewPageModal())}><li><img src={mala} alt="Portifólio"/><span>Portifólio</span></li></a>
            <a href="#" onClick={()=> (Options(4), props.onOpenNewPageModal())}><li><img src={servicos} alt="Serviços"/><span>Serviços</span></li></a>
            <a href="#" onClick={()=> (Options(5), props.onOpenNewPageModal())}><li><img src={email} alt="Contato"/><span>Contato</span></li></a>
          </ul>
      </NavStyle>
  );
}
