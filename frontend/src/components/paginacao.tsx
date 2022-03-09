import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

import './paginacao.css'

export default function Paginacao() {
  const [quantidade, setQuantidade] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/imoveisDisponiveis/")
      .then((response: any) => {
        setQuantidade(response.data.quantidade);
      })
      .catch(() => {
        console.log("Deu errado pagination");
      });
     
  }, []);        
  let quantidadeImoveis:any = quantidade;
  let paginas = Math.round(quantidadeImoveis/20);
  console.log(paginas);
  // let paginas =  Math.round(quantidade/20)




  return (
    <>
      <Container className="mt-3 align-center">
        <Row>
          <Col>
            <Stack spacing={2}>
              <Pagination count={paginas} shape="rounded" />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
