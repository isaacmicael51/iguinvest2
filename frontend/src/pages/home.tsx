import React, { useEffect } from "react";
import "./home.css";
import logo from "./assets/logo.svg";
// import '../getImoveisHome';
import SuperCardsHome from "../components/superCardHome";
import CardTiposImoveis from "../components/cardTiposImoveis";
import CardCidades from "../components/cidadesHome";
import { Row, Col, Container } from "react-bootstrap";
import FiltroHome from "../components/filtroHome";
import { Dialog, Typography, Box, Grid, Radio, Button } from "@mui/material";
import Image from 'mui-image'
import CloseIcon from '@mui/icons-material/Close';
// import Youtube from '../components/youtubeVideos';
import Iconfind from "../pages/assets/icons/Icon-feather-search.svg";
import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import axios from "axios";

export function Home() {
  const [filters, setFilters] = React.useState({ open: false, tipo: "", cidade: 1 });
  const [value, setValue] = React.useState('a');
  const [tipos, setTipos] = React.useState([]);
  const [cidades, setCidades] = React.useState([]);
  const [quantidade, setQuantidade] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/tiposdeimoveisdisponiveis")
      .then((response: any) => {
        setTipos(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://sleepy-bayou-22688.herokuapp.com/api/cidadesdisponiveis")
      .then((response: any) => {
        setCidades(response.data.lista);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  useEffect(() => {
    getImoveis(filters.cidade, filters.tipo)
  }, [filters.cidade, filters.tipo])

  async function getImoveis(cidade, tipo) {
    try {
      if (cidade && !tipo) {
        let res = await axios.get(
          `https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/1/0/${cidade}`
        );
        setQuantidade(res.data.quantidade);
      }
      else {
        let res = await axios.get(
          `https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis/1/${tipo}/${cidade}`
        );
        setQuantidade(res.data.quantidade);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChangeCidade = (event) => {
    setFilters({ ...filters, cidade: event.target.value });
  };

  const handleChangeTipo = (event) => {
    console.log(event.target.value)
    setFilters({ ...filters, tipo: event.target.value });
  };

  console.log(filters)
  console.log(quantidade)

  return (
    <>
      <div className="hero">
        <div className="content-title-hero">
          <h1 className="title-hero">Iguasu Invest</h1>
          <hr className="hr" />
          <h2 className="subtitle-hero">A arte de viver bem</h2>
        </div>
        <FiltroHome />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <button className="form_busca__mobile d-md-none" onClick={() => setFilters({ ...filters, open: true })}>
            Encontre seu imovel <img src={Iconfind} className="icon_find" alt="" />
          </button>
        </div>
      </div>
      <SuperCardsHome />
      <div>
        <CardTiposImoveis />
        <CardCidades />
        <Box sx={{ flexGrow: 1, paddingInline: { xs: '2rem', sm: '3rem', md: '10rem' }, marginBlock: '4rem', paddingBlock: '2rem', backgroundColor: '#f5f5f5' }}>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Image
                src={logo}
                alt="iguassu invest"
                sx={{
                  maxWidth: { xs: 200, sm: 200, md: 250 }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography sx={{ fontSize: '2.2em', color: '#212529', marginBlock: 2, textAlign: { xs: 'center', sm: 'center', md: 'start' } }}>Nossa História</Typography>
                <Typography sx={{ fontSize: 16, color: '#212529', textAlign: { xs: 'center', sm: 'center', md: 'start' } }}> Lorem ipsum Suspendisse consectetur mi at nisl tristique mollis. Pellentesque tempor quam quis purus tempor, eget facilisis dui iaculis. Nunc nibh arcu, pellentesque eget libero et, dictum tempor elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Container className="youtube_section">
          <Row>
            <h3 style={{ fontSize: '1.8em' }}>Acompanhe nosso canal no Youtube </h3>
            <div className="embed-responsive embed-responsive-16by9 align-content-center">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/5CDaG_KXLUk"
              ></iframe>
            </div>
          </Row>

          <Row>
            <h3 className="mt-3">Aqui vão vir as publicações do Instagram</h3>

          </Row>
        </Container>
      </div >
      {filters.open &&
        <FiltrosMobile
          filters={filters}
          setFilters={setFilters}
          handleChangeCidade={handleChangeCidade}
          handleChangeTipo={handleChangeTipo}
          cidades={cidades}
          tipos={tipos}
        />
      }
    </>
  );
}

const FiltrosMobile = ({ filters, setFilters, handleChangeCidade, handleChangeTipo, tipos, cidades }) => {
  return (
    <Dialog
      fullScreen
      open={filters.open}
      onClose={() => setFilters({ ...filters, open: false })}
      sx={{ width: '100%' }}
      PaperProps={{
        style: {
          backgroundImage: `linear-gradient(to right, #ff0451, #812240)`
        },
      }}
    >
      <Box sx={{ backgroundColor: '#fff', height: 'auto', marginTop: '40px', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 4 }}>
          <Typography variant="h6">Escolha a cidade do seu imóvel</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: 3 }}>
            {cidades.map((cidade: any, index) => (
              <Box key={`cidades: ${index}`} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#222' }}>{cidade.nome}</Typography>
                <Radio
                  checked={filters?.cidade == cidade.codigo}
                  onChange={handleChangeCidade}
                  value={cidade.codigo}
                  name="radio-buttons"
                  sx={{}}
                  icon={<RadioButtonUncheckedIcon style={{ color: "#ff0451" }} />}
                  checkedIcon={<CheckIcon style={{ color: "#ff0451", border: '2px solid #ff0451', borderRadius: '50%' }} />}
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Box>
            ))}
          </Box>
          <Typography variant="h6" sx={{ marginTop: 2 }}>Escolha o tipo de imóvel</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: 3 }}>
            {tipos.map((tipo: any, index) => (
              <Box key={`tipo:${index}`} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#222' }}>{tipo.nome}</Typography>
                <Radio
                  checked={filters?.tipo == tipo.codigo}
                  onChange={handleChangeTipo}
                  value={tipo.codigo}
                  name="radio-buttons"
                  sx={{}}
                  icon={<RadioButtonUncheckedIcon style={{ color: "#ff0451" }} />}
                  checkedIcon={<CheckIcon style={{ color: "#ff0451", border: '2px solid #ff0451', borderRadius: '50%' }} />}
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ position: 'fixed', bottom: 20, width: '200px', left: '50%', marginLeft: '-50px' }}>
          <Button autoFocus sx={{ backgroundColor: '#ff0451', color: '#fff' }} onClick={() => setFilters({ ...filters, open: false })}>
            Buscar
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}
