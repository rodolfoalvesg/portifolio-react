
import React, { useEffect, useState } from "react";
import {Container, HeaderPortifolio, ContainerList, CardGit} from './style'

function Contact() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/rodolfoalvesg/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);


  return (
    <Container>
        <HeaderPortifolio>
            <h3>Portifólio</h3>
            <h1>Projetos & Trabalhos</h1>
        </HeaderPortifolio>

        <ContainerList>
                {repositories.map(repository => {
                
                    return (<CardGit>
                                <h2>{(repository.name).replace(/-/g, " ").toUpperCase()}</h2>
                                <p>{repository.description}</p>
                                <a href={repository.html_url} target="blank">Ver Repositório </a>
                            </CardGit>
                            )
                    
                })}

        </ContainerList>
        

    </Container>
    );
}

export default Contact;