import React, { useContext, useEffect, useState } from "react";
import "./filtroHome.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { cidadesDisponiveis, tiposdeImoveisDisponiveis } from "../services/webservice";
import { AppContext } from "../contexts/AppContext";
import { TextField } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

function FiltroHome() {
  const { setLoading } = useContext(AppContext);
  const [cidades, setCidades] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => { loadData() }, []);

  const loadData = async () => {
    const cidades = await cidadesDisponiveis(setLoading)
    setCidades(cidades.lista);
    const res = await tiposdeImoveisDisponiveis(setLoading)
    setTipos(res.lista);
  }

  return (
    <>
      <form className="form_busca__desktop d-none d-md-flex d-lg-block">
        <div className=""  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
          <select className="form_busca__inputs ml-4" name="cidade" id="cidade">
            <option>Qual a localização?</option>
            {cidades.map((cidades, key) => {
              return (
                <option key={key} value={cidades.codigo}>
                  {cidades.nome}
                </option>
              );
            })}
          </select>
          <select
            className="form_busca__inputs"
            name="tipoImovel"
            id="tipoImovel"
          >
            <option>Tipo de imóvel?</option>
            {tipos.map((tipos, key) => {
              return (
                <option key={key} value={tipos.codigo}>
                  {tipos.nome}
                </option>
              );
            })}
          </select>

          <input className="tipos-filtro" name="valorMinimo" type="number" placeholder="Valor Minimo" />
          <input className="tipos-filtro" name="valorMaximo" type="number" placeholder="Valor Maximo" />
          <button
            className="form_busca__button ml-2"
            type="button"
            id="pesquisar"
          >
            Pesquisar
          </button>
        </div>
      </form>
    </>
  );
}

export default FiltroHome;
