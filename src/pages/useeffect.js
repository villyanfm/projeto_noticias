import { useEffect, useState } from "react";

export default function Useeffect() {
    const [numero, setNumero] = useState(0);
    setTimeout(() => {
        setNumero(numero + 1);
    }, 3000)

    useEffect(() => {
        if (numero > 0) {
            document.title = `UseEffect ${numero}`;
        }
    }, [numero])

    return <>
        <div className="text-center">
            <h1> useEffect</h1>
            <h2>{numero === 0 ? <img src={"./loading-2.gif"} height={"50px"} width={"100px"} /> : numero}</h2>
        </div>
    </>
}