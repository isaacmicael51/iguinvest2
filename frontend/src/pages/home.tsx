import React from 'react';
import './home.css';
// import '../getImoveisHome';
import SuperCardsHome from '../components/superCardHome'
import CardTiposImoveis from '../components/cardTiposImoveis';
import CardCidades from '../components/cidadesHome';

export function Home () {
    return (
        <>
            <div className="hero"></div>
            <SuperCardsHome />
            <div>
            <CardTiposImoveis />
            <CardCidades />
            </div>
        </>
    );
}