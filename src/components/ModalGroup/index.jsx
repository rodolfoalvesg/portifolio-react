import React from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import {Profile } from '../Profile'
import {Experience } from '../Experience'
import {Works } from '../Works'
import Contact from '../Contact'
import Portifolio from '../Portifolio'


export function ModalGroup(props) {
  
  function openPage(value){
    switch (value) {
      case 1:
      
        return <Profile />
        break;
      
      case 2:
        return <Experience />
        break;
      
      case 3:
        return <Portifolio />
        break;
      
      case 4:
        return <Works />
        break;

      case 5:
        return <Contact />
        break;
    
      default:
        break;
    }
  }

  return (
    <Modal 
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={props.onRequestClose} 
        className="react-modal-close"
      >
      
        <img src={closeImg} alt="Close"/>
      
      </button>

      {openPage(props.selectPage)}

    </Modal> 
  );
}