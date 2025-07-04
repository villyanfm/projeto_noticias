import { useState } from "react"
export default function Usestate() {
    const [state, setState] = useState(0)
    return <><h1 className="text-center">
        Bem vindo a Use State
    </h1><p className="text-center">
            Cliques {state} vezes <br />
            <button className="btn btn-dark"
                onClick={async () => setState(await soma1(state))}>Clique aqui</button>
        </p>
    </>
}
function soma1(statesoma) {
    statesoma++;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(statesoma)
        }, 1000);
    })
}