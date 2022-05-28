import axios from 'axios'
import { useState, useEffect, forwardRef } from 'react'
import { useLocation, useParams } from "react-router-dom"
import Image from 'mui-image'
import { Dialog, Box, Toolbar, IconButton, Typography, Button, ImageList, ImageListItem, Slide, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export function Imovel(props) {

    const location = useLocation();
    const params = useParams();

    console.log(location)
    console.log(params)

    const [showImagesDialog, setShowImagesDialog] = useState(false);
    const [showImagesCarousel, setShowImagesCarousel] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [imovel, setImovel] = useState(location.state ? location.state : {});
    const [hideBorderRadius, setHideBorderRadius] = useState(false);

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    useEffect(() => {
        axios.get(`https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis`).then(response => {
            let data = response.data.lista.filter(imv => imv.codigo == params.id)[0];
            setImovel(data);
        })
    }, [])

    return (
        <Box sx={{ padding: { xs: 0, sm: 0, md: 4 } }}>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h5">{imovel.titulo}</Typography>
                <Typography>{imovel.endereco}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Box sx={{ maxWidth: '1120px', width: '100%', marginTop: 4 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={16} sm={16} md={8}>
                            <Box
                                sx={{
                                    height: '500px',
                                    width: '100%',
                                }}>
                                <Image
                                    onClick={() => setShowImagesDialog(true)}
                                    src={imovel.fotos[0].url}
                                    alt="tdsadas"
                                    fit="cover"
                                    durantio={0}
                                    style={{
                                        width: "100%",
                                        height: '100%',
                                        borderTopLeftRadius: '13px' ,
                                        borderBottomLeftRadius: '13px'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={8} sx={{ display: { xs: 'none', sm: 'none', md: 'grid' } }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-evenly",
                                    height: "500px"
                                }}
                            >{imovel.fotos.filter((foto, index) => index < 4).map((picture, idx) =>
                                <img
                                    onClick={() => setShowImagesDialog(true)}
                                    src={picture.url}
                                    alt="tdsadas"
                                    style={{
                                        width: "50%",
                                        borderTopRightRadius: idx === 1 ? '13px' : 0,
                                        borderBottomRightRadius: idx === 3 ? '13px' : 0
                                    }}
                                />
                            )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Button onClick={() => setShowImagesDialog(true)}>OXEEE</Button>
            <Dialog
                fullScreen
                open={showImagesDialog}
                onClose={() => setShowImagesDialog(false)}
                TransitionComponent={Transition}
            >
                <Toolbar>
                    <IconButton edge="start" aria-label="fechar" onClick={() => setShowImagesDialog(false)} sx={{ textTransform: 'none', color: "#000" }}>
                        <ArrowBackIosNewIcon fontSize='small' />
                    </IconButton>
                </Toolbar>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginInliner: '5rem'
                }}>
                    <Box sx={{ width: '50%', height: '100%', marginBlock: 5 }}>
                        <ImageList variant="masonry" cols={2} gap={8} >
                            {imovel.fotos.map((item, index) => (
                                <Button onClick={() => { setCurrentImage(index), setShowImagesCarousel(true) }}>
                                    <ImageListItem key={item.img} sx={{ "&:hover": { filter: 'brightness(0.5)' } }}>
                                        <img
                                            src={`${item.url}`}
                                            alt={item.descricao}
                                        />
                                    </ImageListItem>
                                </Button>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
            </Dialog>
            <Carousel handleClose={() => setShowImagesCarousel(false)} open={showImagesCarousel} data={imovel.fotos} transition={Transition} currentImage={currentImage} setCurrentImage={setCurrentImage} />
        </Box>
    )
}

const Carousel = ({ data, open, handleClose, transition, currentImage, setCurrentImage }) => {

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
        // TransitionComponent={transition ? transition : 'none'}
        >
            <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000', paddingBlock: 2 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Button
                        variant="contained"
                        aria-label="fechar"
                        onClick={handleClose}
                        size='small'
                        sx={{ textTransform: 'none', backgroundColor: "#000", '&:hover': { backgroundColor: "#808080" } }}
                        startIcon={<CloseIcon fontSize='small' sx={{ color: '#FFFFFF' }} />}>
                        <Typography sx={{ color: '#FFFFFF' }}>Fechar</Typography>
                    </Button>
                    <Typography sx={{ color: '#FFFFFF' }}>{currentImage}/{data.length}</Typography>
                </Toolbar>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                    <ArrowCircleLeftIcon onClick={() => setCurrentImage(currentImage === 0 ? null : currentImage - 1)} sx={{ color: '#FFFFFF' }} />
                    <img
                        style={{ width: '100%', minHeight: 400, maxWidth: 800 }}
                        src={`${data[currentImage].url}`}
                    />
                    <ArrowCircleRightIcon onClick={() => setCurrentImage(currentImage === data.length - 1 ? null : currentImage + 1)} sx={{ color: '#FFFFFF' }} />
                </Box>
            </Box>
        </Dialog>
    )
}