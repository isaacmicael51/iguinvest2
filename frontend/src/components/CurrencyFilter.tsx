// import React, { useState } from 'react'
// import { Box, Slider, Typography } from "@mui/material"

// export const CurrencyFilter = props => {

//     const [value, setValue] = React.useState([20, 37]);

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//     // const valuetext = ({ value }) => {
//     //     new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
//     //     return value
//     // }

//     return (
//         <Box sx={{ width: 300 }}>
//         <Slider
//           getAriaLabel={() => 'Temperature range'}
//           value={value}
//           onChange={handleChange}
//         />
//       </Box>
//     )
// }

// function valuetext(value) {
//     return `${value}°C`;
//   }


import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export const CurrencyFilter = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}