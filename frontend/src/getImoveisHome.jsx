import React, { useEffect, useState} from 'react';
import axios from 'axios';
import api from './api';


export default async function GetImoveisHome() {
    try {
        const response = await fetch(`https://sleepy-bayou-22688.herokuapp.com/api/imoveisDisponiveis`)
        const data = await response.json();
        console.log(data.lista);

    } catch (error) {
        console.log("errooou")
    }
}
GetImoveisHome();







