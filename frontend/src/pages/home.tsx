import React from "react";
import "./home.css";
import logo from "./assets/logo.svg";
// import '../getImoveisHome';
import SuperCardsHome from "../components/superCardHome";
import CardTiposImoveis from "../components/cardTiposImoveis";
import CardCidades from "../components/cidadesHome";
import { Row, Col, Container, Button } from "react-bootstrap";
import FiltroHome from "../components/filtroHome";
import { Divider } from "@mui/material";
// import Youtube from '../components/youtubeVideos';

export function Home() {
  return (
    <>
      <div className="hero">
        <div className="content-title-hero">
          <h1 className="title-hero">Iguasu Invest</h1>
          <hr className="hr" />
          <h2 className="subtitle-hero">A arte de viver bem</h2>
        </div>
        <FiltroHome />
      </div>
      <SuperCardsHome />
      <div>
        <CardTiposImoveis />
        <CardCidades />
        <Container fluid className="container_nossa___historia">
          <Row className="mt-4">
            <Col
              xs={4}
              md={5}
              className="align-content-center row_content_logo__nossa_historia"
            >
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
        <Container className="youtube_section">
          <Row>
            <h3>Acompanhe nosso canal no Youtube </h3>
            <div className="embed-responsive embed-responsive-16by9 align-content-center">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/5CDaG_KXLUk"
              ></iframe>
            </div>
          </Row>

          <Row>
            <h3 className="mt-3">Aqui vão vir as publicações do Instagram</h3>
            
          </Row>
        </Container>
      </div>
    </>
  );
}
