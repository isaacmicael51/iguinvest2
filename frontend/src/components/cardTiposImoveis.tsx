import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./cardTiposImoveis.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function CardTiposImoveis() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

  const [tipos, setTipos] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tiposdeimoveisdisponiveis")
      .then((response) => {
        setTipos(response.data.lista);
        var tiposReverse = [];

    })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);
  return (
      <>
    <Container>
        <h2 className="h2">Tipos de Imóveis para você</h2>
           <ul className="ul_hozintal__scroll">
                {tipos.map((tipos, key) => {
                        return (
                            <>
                            <a href="#" key={key}>
                                <li className="li_scroll" value={tipos.codigo}>
                                    {tipos.nome}
                                </li>
                            </a>
                            </>
                        );
                        })}
            </ul>
    </Container>

</>
  );
}

export default CardTiposImoveis;
