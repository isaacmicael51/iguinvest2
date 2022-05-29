import React, { useEffect, useState } from "react";
import "./filtroHome.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

function FiltroHome() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [cidades, setcidades] = useState([]);

  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/cidadesdisponiveis")
      .then((response:any) => {
        setcidades(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  const [tipos, setTipos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis")
      .then((response:any) => {
        setTipos(response.data.lista);

      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  return (
    <>
      <form className="form_busca__desktop d-none d-lg-block">
        <div className="form-group form_busca__desktop_container">
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

          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
            
          </Box>
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
