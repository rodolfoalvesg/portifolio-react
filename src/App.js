import React, { useState } from 'react';
import { GlobalStyle, GlobalBackground, Container } from './styles/global'
import Modal from 'react-modal';
import { ModalGroup}  from './components/ModalGroup'
import Header from './components/Header';
import Main from './components/Main';
import { Menu } from './components/Menu'


Modal.setAppElement("#root")

function App() {
  const [isNewPageModalOpen, setIsNewPageModalOpen] = useState(false)
  const [isSelectedPage, setIsSelectedPage] = useState(0)

  function handleOpenNewPageModal(){
    setIsNewPageModalOpen(true)
  }

  function handleCloseNewPageModal(){
    setIsNewPageModalOpen(false)
  }

  function handleSelectComponent(value){
    setIsSelectedPage(value)
  }
  return (
      <>
      <Container>
        <Header/>
        <Main/>
        <Menu onOpenNewPageModal={handleOpenNewPageModal} onSelectComponent={handleSelectComponent}/>
      </Container> 

      <ModalGroup 
        isOpen={isNewPageModalOpen}
        onRequestClose={handleCloseNewPageModal}
        selectPage={isSelectedPage}
      />
      <GlobalBackground />
      <GlobalStyle />
        
    </>
  )
}

export default App;