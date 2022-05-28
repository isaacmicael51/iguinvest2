import axios from 'axios'
import { useState, useEffect, forwardRef } from 'react'
import { useLocation, useParams } from "react-router-dom"
import Image from 'mui-image'
import { Dialog, Box, Toolbar, IconButton, Typography, Button, ImageList, ImageListItem, Grid } from '@mui/material';
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

    useEffect(() => {
        axios.get(`https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis`).then(response => {
            let data = response.data.lista.filter(imv => imv.codigo == params.id)[0];
            setImovel(data);
        })
    }, [])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: { xs: 0, sm: 0, md: 4 }, width: '100%', maxWidth: '1200px' }}>
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
                                        '&:  hover': {
                                            filter: 'brightness(.5)',
                                            transition: '0.3s ease-in-out',

                                        }
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
                                            borderTopLeftRadius: '13px',
                                            borderBottomLeftRadius: '13px',
                                            cursor: 'pointer'
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
                                        height: "500px",
                                        // '&:  hover': {
                                        //     filter: 'brightness(.5)',
                                        // },
                                        // transition: '0.3s ease-in-out'
                                    }}
                                >{imovel.fotos.filter((foto, index) => index > 0 && index < 5).map((picture, idx) =>

                                    <img
                                        onClick={() => setShowImagesDialog(true)}
                                        src={picture.url}
                                        alt="tdsadas"
                                        style={{
                                            width: "50%",
                                            borderTopRightRadius: idx === 1 ? '13px' : 0,
                                            borderBottomRightRadius: idx === 3 ? '13px' : 0,
                                            transition: '0.3s ease-in-out',
                                            cursor: 'pointer'
                                        }}
                                    />
                                )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Dialog
                    fullScreen
                    open={showImagesDialog}
                    onClose={() => setShowImagesDialog(false)}
                    sx={{ transition: '5s ease-in-out' }}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            aria-label="fechar"
                            onClick={() => setShowImagesDialog(false)}
                            sx={{ color: "#000" }}
                        >
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
                        <Box sx={{ width: {xs: '90%', md: '50%'}, height: '100%', marginBlock: 5 }}>
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
                <Carousel handleClose={() => setShowImagesCarousel(false)} open={showImagesCarousel} data={imovel.fotos} currentImage={currentImage} setCurrentImage={setCurrentImage} />
            </Box>
        </Box>
    )
}

const Carousel = ({ data, open, handleClose, currentImage, setCurrentImage }) => {

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
        >
            <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000',paddingBlock: 2, paddingInline: { xs: 0, sm: 5, md: 10 } }}>
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
                    <Typography sx={{ color: '#FFFFFF' }}>{currentImage + 1}/{data.length}</Typography>
                </Toolbar>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', sm: 'space-between' }, flex: 1, paddingBlock: { xs: 1, sm: 5, md: 10 } }}>
                    <IconButton sx={{ display: { xs: 'none', sm: 'inherit' } }}>
                        <ArrowCircleLeftIcon fontSize='large' onClick={() => { currentImage === 0 ? null : setCurrentImage(currentImage - 1) }} sx={{ color: '#FFFFFF' }} />
                    </IconButton>
                    <Image
                        src={`${data[currentImage].url}`}
                        alt={data.descricao}
                        fit="cover"
                        durantio={0}
                        sx={{
                            width: "100%",
                            borderRadius: 5,
                            minHeight: { xs: 200, sm: 300, md: 500 },
                            maxWidth: { xs: 350, sm: 500, md: 900 },
                            maxHeight: { xs: 200, sm: 300, md: 500 },
                        }}
                    />
                    <IconButton sx={{ display: { xs: 'none', sm: 'inherit' } }}>
                        <ArrowCircleRightIcon fontSize='large' onClick={() => { currentImage + 1 === data.length ? null : setCurrentImage(currentImage + 1) }} sx={{ color: '#FFFFFF' }} />
                    </IconButton>
                </Box>
            </Box>
        </Dialog>
    )
}