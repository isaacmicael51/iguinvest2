import React from 'react';
import './home.css';
import logo from './assets/logo.svg';
// import '../getImoveisHome';
import SuperCardsHome from '../components/superCardHome'
import CardTiposImoveis from '../components/cardTiposImoveis';
import CardCidades from '../components/cidadesHome';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Youtube from '../components/youtubeVideos';





export function Home ({data}) {
    console.log('data', data);
    
    return (
        <>
            <div className="hero"></div>
            <SuperCardsHome />
            <div>
            <CardTiposImoveis />
            <CardCidades />
            <Container className='container_nossa___historia'>
                <Row className='mt-4'>
                    <Col xs={4}>
                        <img src={logo} className='img-fluid logo_nossa__historia' alt="" />
                    </Col>
                    <Col xs={8} className='text_nossa__historia'>
                    <h3>Nossa História</h3>
                        <p>Lorem ipsum Suspendisse consectetur mi at nisl tristique mollis. Pellentesque tempor quam quis purus tempor, eget facilisis dui iaculis. Nunc nibh arcu, pellentesque eget libero et, dictum tempor elit.</p>
                        <Button className='button-rose'>Conheça nossa trajetória </Button>

                    </Col>

                </Row>
            </Container>
            </div>
        </>
    );
}