import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./cidadesHome.css";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import json from "./jsonImgCidades";
import { Box, CardMedia, IconButton, Paper, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function CardCidades() {

  const [cidades, setcidades] = useState([]);
  const [fotos, setFotos] = useState([]);

  const navigate = useNavigate();

  const carousel = useRef();
  const xPos = useRef(0);
  const animation = useAnimation();
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const loadAll = async () => {
      let fotos = await json.getHomeCityList();
      setFotos(fotos);
    };
    loadAll();
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

  function onUpdate(latest) {
    xPos.current = latest.x;
  }

  function onLeftClick() {
    const newXPosition = xPos.current + 330;

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    });
  }

  function onRightClick() {
    const newXPosition = xPos.current - 330;

    animation.start({
      x: newXPosition < -carouselWidth ? -carouselWidth : newXPosition,
    });
  }

  let fotosCidades = !!cidades && cidades.map((cidade, key) => {
    var test = fotos.find((element) => { return element.codigo === cidade.codigo })
    return test;
  }).filter(item => item !== undefined);


  return (
    <Container fluid style={{ maxWidht: '1200px' }}>
      <h2 className="h2">Descubra novas cidades</h2>
      <Box sx={styles.container}>
        <IconButton sx={styles.button} onClick={onLeftClick}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box sx={styles.mobileStoriesContainer} ref={carousel}>
          <motion.div
            drag="x"
            animate={animation}
            onUpdate={onUpdate}
            dragDirectionLock
            transition={{ duration: 0.85 }}
            dragConstraints={{ right: 0, left: -carouselWidth }}
            whileTap={{ cursor: "grabbing" }}
            style={{
              display: "flex",
              "&:active": {
                cursor: "grabbing",
              },
            }}
          >
            {!!fotosCidades && fotosCidades.map((foto, key) =>
              <Paper
                elevation={4}
                sx={styles.paperContainer}
                key={`foto${key}`}
                onClick={() => navigate('/todososimoveis', { state: { foto } })}
              >
                <CardMedia
                  component="img"
                  height="auto"
                  image={foto.url}
                  alt={`${foto.name}`}
                  sx={styles.image}
                />
                <Box sx={styles.textContainer}>
                  <Typography style={{ fontSize: 16, color: '#222', fontFamily: 'Montserrat' }}>
                    {foto.name}
                  </Typography>
                </Box>
              </Paper>
            )}
          </motion.div>
        </Box>
        <IconButton sx={styles.button} onClick={onRightClick}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
}


export default CardCidades;

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    // paddingLeft: { xs: 0, sm: 0, md: '1.5rem', lg: '2.5rem', xl: '9rem' },
    // paddingRight: { xs: 0, sm: 0, md: '1.5rem', lg: '2.5rem', xl: '9rem' },
    marginBlock: 4
  },
  mobileStoriesContainer: {
    display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    cursor: "grab",
    height: '360px',
  },
  paperContainer: {
    marginInline: "0.8rem",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "300px",
    width: "300px",
    borderRadius: "10px 10px",
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    textAlign: "center",
    padding: 2,
  },
  image: {
    padding: 0,
    height: '240px',
    borderRadius: "10px 10px 0 0",
    objectFit: 'cover'
  },
  buttonMobile: {
    background: "#fff",
    boxSizing: "border-box",
    padding: "0 20px",
    height: 40,
    border: "1px solid #1E3460",
    width: '328px',
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'center',
    display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
    marginInline: '1rem',
  },
};