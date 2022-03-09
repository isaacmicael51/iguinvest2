import React, { useEffect, useState } from "react";
import axios from "axios";

import './filtrosTodosOsimoveis.css'
import { Container, Row, Col} from "react-bootstrap";

function FiltrosTodosImoveis() {
  const [tipos, setTipos] = useState([]);
  const [cidades, setcidades] = useState([]);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tiposdeimoveisdisponiveis")
      .then((response: any) => {
        setTipos(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/cidadesdisponiveis")
      .then((response: any) => {
        setcidades(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  const selected = 1;
  return (
    <>
      <Container className="filter-all">
        <Row>
          <Col>
            <form action="#" className="container-filtros-all">

              <select className="tipos-filtro">
                <option>Cidade</option>
                {cidades.map((cidade, key) => {
                  return (
                    <option value={cidade.codigo}  selected={cidade.codigo === selected} key={key}>
                      {cidade.nome}
                    </option>
                  );
                })}
              </select>
              <select className="tipos-filtro">
                <option>Tipo de imóvel</option>
                {tipos.map((tipo, key) => {
                  return (
                    <option value={tipo.codigo} key={key}>
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
      
    </>
  );
}

export default FiltrosTodosImoveis;
