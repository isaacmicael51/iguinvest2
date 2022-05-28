import axios from 'axios'
import { useState, useEffect, forwardRef } from 'react'
import { useLocation, useParams } from "react-router-dom"
import { Dialog, Box, Toolbar, IconButton, Typography, Button, ImageList, ImageListItem, Slide, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Imovel(props) {

    const location = useLocation();
    const params = useParams();

    console.log(location)
    console.log(params)

    const [showImagesDialog, setShowImagesDialog] = useState(false);
    const [imovel, setImovel] = useState(location.state ? location.state : {});

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
        <Box sx={{ padding: 4 }}>
            <Typography variant="h5">{imovel.titulo}</Typography>
            <Typography>{imovel.endereco}</Typography>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Box sx={{ maxWidth: '1120px', marginTop: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={imovel.fotos[0].url} alt="asjmd" style={{ width: '100%', height: '100%' }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                <img src={imovel.fotos[1].url} alt="asjmd" style={{ maxWidth: '275px', width: '100%', height: '100%' }} />
                                <img src={imovel.fotos[4].url} alt="asjmd" style={{ maxWidth: '275px', width: '100%', height: '100%' }} />
                                <img src={imovel.fotos[3].url} alt="asjmd" style={{ maxWidth: '275px', width: '100%', height: '100%' }} />
                                <img src={imovel.fotos[0].url} alt="asjmd" style={{ maxWidth: '275px', width: '100%', height: '100%' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box> */}
            <div>quando clicar em alguma foto: detalhes das fotos</div>
            <Button onClick={() => setShowImagesDialog(true)}>OXEEE</Button>
            <Dialog
                fullScreen
                open={showImagesDialog}
                onClose={() => setShowImagesDialog(false)}
                TransitionComponent={Transition}
            >
                    <Toolbar>
                        <IconButton edge="start" aria-label="close" onClick={() => setShowImagesDialog(false)} sx={{ textTransform: 'none', color: "#000" }}>
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
                            {imovel.fotos.map((item) => (
                                <ImageListItem key={item.img} sx={{ "&:hover": { filter: 'brightness(0.5)', cursor: 'pointer' } }}>
                                    <img
                                        src={`${item.url}`}
                                        alt={item.descricao}
                                        // loading="lazy"
                                    />
                                </ImageListItem>

                            ))}
                        </ImageList>
                    </Box>
                </Box>

            </Dialog>
        </Box>
    )
}