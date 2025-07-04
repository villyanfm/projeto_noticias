import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function Page() {
    const router = useRouter()
    const subnoticia = router.query.subnoticia
    return <>
        <Container className="text-center">
            <h1>SubNotícias:</h1>
            {Array.isArray(subnoticia)
            ?subnoticia.map((valor,indice)=>
            <h2>Indice Vetor: <b>{indice}</b>, Valor Vetor:<b>{valor}</b></h2>)
            :"Não encontrado"}
        </Container>
    </>
}