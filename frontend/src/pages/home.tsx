import React from "react";
import "./home.css";
import logo from "./assets/logo.svg";
// import '../getImoveisHome';
import SuperCardsHome from "../components/superCardHome";
import CardTiposImoveis from "../components/cardTiposImoveis";
import CardCidades from "../components/cidadesHome";
import { Row, Col, Container, Button } from "react-bootstrap";
import FiltroHome from "../components/filtroHome";
import { Dialog, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
// import Youtube from '../components/youtubeVideos';
import Iconfind from "../pages/assets/icons/Icon-feather-search.svg";

export function Home() {
  const [filters, setFilters] = React.useState({ open: false, tipo: "", cidade: "" });
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
        <Container fluid className="container_nossa___historia">
          <Row className="mt-4">
            <Col
              xs={12}
              md={5}
              className="align-content-center row_content_logo__nossa_historia"
            >
              <img
                src={logo}
                className="img-fluid logo_nossa__historia"
                alt="iguassu invest"
              />
            </Col>
            <Col xs={12} md={7} className="text_nossa__historia">
              <h2 style={{ fontSize: '1.8em' }}>Nossa História</h2>
              <p>
                Lorem ipsum Suspendisse consectetur mi at nisl tristique mollis.
                Pellentesque tempor quam quis purus tempor, eget facilisis dui
                iaculis. Nunc nibh arcu, pellentesque eget libero et, dictum
                tempor elit.
              </p>
              <Button className="button-rose">Conheça nossa trajetória </Button>
            </Col>
          </Row>
        </Container>
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
      </div>
      {filters.open &&
        <Dialog
          fullScreen
          open={filters.open}
          onClose={() => setFilters({ ...filters, open: false })}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setFilters({ ...filters, open: false })}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={() => setFilters({ ...filters, open: false })}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem>
          </List>
        </Dialog>
      }
    </>
  );
}
