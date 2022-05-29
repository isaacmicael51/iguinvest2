import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./todosOsimoveis.css";
import axios from "axios";
import { Loader } from 'rsuite';
import ResultBusca from "../components/resultBusca";
import { useLocation } from "react-router-dom";

export function TodosOsImoveis() {
  
  const location = useLocation()

  const [tipos, setTipos] = useState([]);
  const [cidades, setcidades] = useState([]);

<<<<<<< HEAD
  const [tipoSelecionado, setTipoSelecionado] = useState(location.state ? location.state.tipo.codigo : '');
  const [cidadeSelecionada, setCidadeSelecionada] = useState(String);
=======
  const [tipoSelecionado, setTipoSelecionado] = useState(location.state.tipo ? location.state.tipo.codigo : '');
  const [cidadeSelecionada, setCidadeSelecionada] = useState(location.state.foto ? location.state.foto.codigo : '');
>>>>>>> 6cd71ec90e6a2b8c5c379d16276611adb85658ee

  const instance = <Loader />;

  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis")
      .then((response: any) => {
        setTipos(response.data.lista);
        <Loader />
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/cidadesdisponiveis")
      .then((response: any) => {
        setcidades(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  return (
    <>
      <Container className="filter-all">
        <Row>
          <Col>
            <form action="#" className="container-filtros-all">

              <select className="tipos-filtro" onChange={(e) => setCidadeSelecionada(e.target.value)} value={cidadeSelecionada}>
                <option>Cidade</option>
                {cidades.map((cidade, key) => {
                  return (
                    <option value={cidade.codigo} key={`cidade:${key}`}>
                      {cidade.nome}
                    </option>
                  );
                })}
              </select>
              <select className="tipos-filtro" onChange={(e) => setTipoSelecionado(e.target.value)} value={tipoSelecionado}>
                <option>Tipo de imóvel</option>
                {tipos.map((tipo, key) => {
                  return (
                    <option value={tipo.codigo} key={`tipo:${key}`}>
                      {tipo.nome}
                    </option>
                  );
                })}
              </select>
              <input className="tipos-filtro" name="valorMinimo" type="number" placeholder="Valor Minimo" />
              <input className="tipos-filtro" name="valorMaximo" type="number" placeholder="Valor Maximo" />
            </form>
          </Col>
        </Row>
      </Container>
      <ResultBusca
        cidade={cidadeSelecionada}
        tipo={tipoSelecionado}
      />
    </>
  )
}