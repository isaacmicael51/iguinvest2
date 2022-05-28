import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./todosOsimoveis.css";
import axios from "axios";
import { Loader } from 'rsuite';



import ResultBusca  from "../components/resultBusca";





export function TodosOsImoveis() {

    const [tipos, setTipos] = useState([]);
    const [cidades, setcidades] = useState([]);

    const [tipoSelecionado, setTipoSelecionado] = useState(String);
    const [cidadeSelecionada, setCidadeSelecionada] = useState(String);

    const instance = <Loader />;

    
    //BUSCA CIDADES E TIPOS DEIMOVEIS DISPONIVEIS
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
    //BUSCA CIDADES E TIPOS DEIMOVEIS DISPONIVEIS

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
                    <input className="tipos-filtro" name="valorMinimo" type="number" placeholder="Valor Minimo"/>
                    <input className="tipos-filtro" name="valorMaximo" type="number" placeholder="Valor Maximo"/>
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