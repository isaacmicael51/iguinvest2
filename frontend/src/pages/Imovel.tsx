import { useLocation, useParams } from "react-router-dom"

export function Imovel (props) {

    const location = useLocation();
    const params = useParams();

    console.log(location)
    console.log(params)

    const [imovel, setImovel] = useState(location.state || {})

    useEffect(() => {
        setImovel(location.state)
    }, [location.state])

    return (
        <div>
            <p>title</p>
            <p>subtitle</p>
            <div>slider</div>
            <div>quando clicar em alguma foto: detalhes das fotos</div>
        </div>
    )
}