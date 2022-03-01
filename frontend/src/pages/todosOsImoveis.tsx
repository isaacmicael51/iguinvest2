import React, { useEffect, useState } from "react";
import FiltrosTodosImoveis from "../components/filtrosTodosOsImoveis";
import ResultBusca  from "../components/ResultBusca";


export function TodosOsImoveis() {

    return (
       <>
        <FiltrosTodosImoveis />
        <ResultBusca />
       </>
    )
}