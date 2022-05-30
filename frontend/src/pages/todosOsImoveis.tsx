import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./todosOsimoveis.css";
import axios from "axios";
import ResultBusca from "../components/resultBusca";
import { useLocation } from "react-router-dom";
import {AppContext} from '../contexts/AppContext';
import { cidadesDisponiveis, tiposdeImoveisDisponiveis } from "../services/webservice";

export function TodosOsImoveis() {

  const location = useLocation();
  const { setLoading } = useContext(AppContext)
  
  const [tipos, setTipos] = useState([]);
  const [cidades, setCidades] = useState([]);
  
  const [tipoSelecionado, setTipoSelecionado] = useState(!!location?.state?.tipo ? location.state.tipo.codigo : '');
  const [cidadeSelecionada, setCidadeSelecionada] = useState(!!location?.state?.cidade ? location.state.cidade.codigo : '');

  useEffect(() => {
    setLoading(true)
    loadData()
  }, [])
 
  const loadData = async () => {
    const cidades = await cidadesDisponiveis(setLoading)
    setCidades(cidades.lista);
    const res = await tiposdeImoveisDisponiveis(setLoading)
    setTipos(res.lista);
  }

  const loadSelectedCity = (e) => {
    setCidadeSelecionada(e.target.value)
  }

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