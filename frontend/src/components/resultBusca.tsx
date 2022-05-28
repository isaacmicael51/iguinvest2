import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import axios from "axios";
import "./resultBusca.css";

import iconArea from "../pages/assets/icons/icon-area-1.svg";
import iconAreaExt from "../pages/assets/icons/icon-area-2.svg";
import IconBed from "../pages/assets/icons/icon-bed.svg";
import IconCar from "../pages/assets/icons/icon-car.svg";
import IconLocation from "../pages/assets/icons/icon-location-on.svg";
import IconShower from "../pages/assets/icons/icon-shower.svg";
import { useNavigate } from "react-router-dom";

function ResultBusca({ cidade, tipo }) {
  // pega a quantidade de imoveis e calcula a quatidade de páginas

  const navigate = useNavigate();

  const [quantidade, setQuantidade] = useState([]);
  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/")
      .then((response: any) => {
        setQuantidade(response.data.quantidade);
      })
      .catch(() => {
        console.log("Deu errado - pagination");
      });
  }, []);
  //Calculo quantidade de páginas
  let quantidadeImoveis: any = quantidade;
  let paginas = Math.round(quantidadeImoveis / 20);

  const [imoveis, setImoveis] = useState([]);
  let page: any;
  page = 1;

  page = 1;
  async function getImoveis(cidade, tipo, page) {
    try {
      // -RAUL- VERIFICA SE CIDADE E TIPO ESTAO VAZIOS
      if (cidade && tipo === "") {
        // -RAUL- SE OS 2 ESTIVEREM VAZIOS, BUSCA TODOS OS IMOVEIS
        let res = await axios.get(
          `https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/${page}`
        );
        console.log(res);
        setImoveis(res.data.lista);
      } else if (cidade === "" && tipo) {
        // -RAUL- SE APENAS CIDADE ESTIVER VAZIA, PROCURA IMOVEIS PELO TIPO
        let res = await axios.get(
          `https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/${page}/${tipo}`
        );
        console.log(res);
        setImoveis(res.data.lista);
      } else if (cidade && tipo === "") {
        // -RAUL- SE TIPO ESTIVER VAZIO, BUSCA IMOVEIS PELA CIDADE
        let res = await axios.get(
          `https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/${page}/${cidade}`
        );
        console.log(res);
        setImoveis(res.data.lista);
      } else {
        // -RAUL- SE AMBOS ESTIVEREM PREENCHIDOS, BUSCA IMOVEIS POR TIPO E CIDADE
        let res = await axios.get(
          `https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/${page}/${tipo}/${cidade}`
        );
        console.log(res);
        setImoveis(res.data.lista);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getImoveis(cidade, tipo, page);
  }, [cidade, tipo]);

  // Muda a página quando clica no botão da paginação e scrolla até o topo
  function handlePagination(event) {
    page = event.currentTarget.textContent;
    getImoveis(cidade, tipo, page);
    window.scrollTo(0, 0);
  }

  function handleDetails(imovel: any) {
    console.log(imovel)
    navigate(`/todososimoveis/${imovel.codigo}`, {state: imovel});
  }

  return (
    <>
      <Container>
        <Row>
          {imoveis.map((imovel, key) => {
            return (
              <>
                <Col md="4" className="mt-4">
                  <div className="carousel-super-destaque" key={key}>
                    <div className="card-imoveis">
                      <div
                        className="card-imoveis_img__top"
                        style={{
                          backgroundImage: `url(${imovel.urlfotoprincipal})`,
                        }}
                      ></div>
                      <div className="card-imoveis_body">
                        <h3 className="card-imoveis_card__title">
                          {imovel.titulo}
                        </h3>
                        <div className="card-imoveis_text">
                          <p>
                            <img
                              src={IconLocation}
                              className="img-responsive card-imoveis_icon__ubication"
                            />
                            {imovel.endereco}
                          </p>
                          <p>
                            <img
                              src={IconShower}
                              className="card-imoveis_icon__left img-responsive"
                            />
                            {imovel.numerobanhos} banheiros
                            <img
                              src={IconShower}
                              className="card-imoveis_icon__shower img-responsive"
                            />
                            {imovel.numerosuites} suites
                            <img
                              src={IconBed}
                              className="card-imoveis_icon__bed img-responsive"
                            />
                            {imovel.numeroquartos} quartos
                          </p>
                          <p>
                            <img
                              src={IconCar}
                              className="card-imoveis_icon__left img-responsive"
                            />
                            {imovel.numerovagas} vagas
                            <img
                              src={iconArea}
                              className="card-imoveis_icon__shower img-responsive"
                            />
                            {imovel.arealote} m² de lote
                            <img
                              src={iconArea}
                              className="card-imoveis_icon__bed img-responsive"
                            />
                            {imovel.areaprincipal} m² construção
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <button
                            className="button-more_info"
                            onClick={() => handleDetails(imovel)}
                          >
                            mais detalhes
                          </button>
                          <a
                            href="https://api.whatsapp.com/send?phone=5545998171516&text=Ol%C3%A1,%20tenho%20interesse%20neste%20im%C3%B3vel,%20c%C3%B3digo%20776%20Aguardo%20breve%20o%20contato.%20Obrigado!."
                            className="button-more_agend"
                          >
                            agendar visita
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Container className="mt-3 align-center">
        <Row>
          <Col>
            <Stack spacing={2}>
              <Pagination
                count={paginas}
                onChange={handlePagination}
                shape="rounded"
              />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ResultBusca;
