import React from "react";
import "./home.css";
import logo from "./assets/logo.svg";
// import '../getImoveisHome';
import SuperCardsHome from "../components/superCardHome";
import CardTiposImoveis from "../components/cardTiposImoveis";
import CardCidades from "../components/cidadesHome";
import { Row, Col, Container, Button } from "react-bootstrap";
import FiltroHome from "../components/filtroHome";
// import Youtube from '../components/youtubeVideos';

export function Home() {
  return (
    <>
      <div className="hero">
          <FiltroHome/>
      </div>
      <SuperCardsHome />
      <div>
        <CardTiposImoveis />
        <CardCidades />
        <Container fluid className="container_nossa___historia">
          <Row className="mt-4">
            <Col xs={4} md={5} className="align-content-center row_content_logo__nossa_historia">
              <img
                src={logo}
                className="img-fluid logo_nossa__historia"
                alt=""
              />
            </Col>
            <Col xs={8} md={7} className="text_nossa__historia">
              <h2>Nossa História</h2>
              <p>
                Lorem ipsum Suspendisse consectetur mi at nisl tristique mollis.
                Pellentesque tempor quam quis purus tempor, eget facilisis dui
                iaculis. Nunc nibh arcu, pellentesque eget libero et, dictum
                tempor elit.
              </p>
              <Button className="button-rose">Conheça nossa trajetória </Button>
            </Col>
          </Row>
        </Container>
        <Container  className="youtube_section">
          <Row>
              <h3>Acompanhe nosso canal no Youtube </h3>
            <div className="embed-responsive embed-responsive-16by9 align-content-center">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/5CDaG_KXLUk"
                allowfullscreen
              ></iframe>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
