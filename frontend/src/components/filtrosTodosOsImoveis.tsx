import React, { useEffect, useState } from "react";
import axios from "axios";

import "../pages/filtrosTodosOsImoveis.css";
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

  return (
    <>
      <Container className="filter-all">
        <Row>
          <Col>
            <form action="#" className="container-filtros-all">
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

              <select className="tipos-filtro">
                <option>Cidade</option>
                {cidades.map((cidade, key) => {
                  return (
                    <option value={cidade.codigo} key={key}>
                      {cidade.nome}
                    </option>
                  );
                })}
              </select>

              
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FiltrosTodosImoveis;
