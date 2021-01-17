import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import { Column, Section, Title, Container } from 'rbx';
import '../../styles/home.scss';

const HomeScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
            Crie notas facilmente e acesse quando quiser na nuvem
              </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
            Mantenha informações importantes à mão ao sincronizar suas notas em todos os seus dispositivos..<br /><br />
            Tenha o que você precisar, quando precisar. A pesquisa gera resultados enquanto você digita
              </Title>
            <a className="button is-outlined is-white is-large">
              <strong>Cadastre-se gratuitamente agora</strong>
            </a>
          </Column>
          <Column size={6} offset={1}>
           <img src={PresentationImage} />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
)


export default HomeScreen;