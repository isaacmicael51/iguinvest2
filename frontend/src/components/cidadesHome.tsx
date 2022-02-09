import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./cardTiposImoveis.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import json from "../components/jsonFile";

function CardCidades() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [tipos, setTipos] = useState([]);
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      let fotos = await json.getHomeCityList();
      setFotos(fotos);
    };
    loadAll();
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cidadesdisponiveis")
      .then((response) => {
        setTipos(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  return (
    <>
      <Container>
        <h2 className="h2">Descubra novas cidades</h2>
        <Carousel
          responsive={responsive}
          keyBoardControl={false}
          showDots={false}
          arrows={false}
          autoPlay={true}
        >
          {tipos.map((tipos, key) => {
            return (
              <>
                <div key={key}>
                  <a href="#">
                    <div className="card_tipos">
                      <div className="card_tipos__name">
                        {fotos.map((fotos, index) => {
                          return <img src={fotos.url} key={index} />;
                        })}
                        <p value={tipos.codigo}>{tipos.nome}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </Carousel>AIzaSyBhtBPZz75HQw7rRoGmG8N0seViddjuaUs
      </Container>
    </>
  );
}

export default CardCidades;
