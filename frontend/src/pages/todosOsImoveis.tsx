import React, { useEffect, useState } from "react";
import FiltrosTodosImoveis from "../components/filtrosTodosOsImoveis";
import Paginacao from "../components/paginacao";


import ResultBusca  from "../components/resultBusca";


export function TodosOsImoveis() {

    return (
       <>
        <FiltrosTodosImoveis />
        <ResultBusca />
        <Paginacao />
       </>
    )
}