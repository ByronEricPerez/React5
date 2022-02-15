import { useState } from "react";

const ItemCount  = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        if (contador < 5 ) {
            setContador(contador+1);
        }
        
        
    }

    const disminuir = () => {
        if (contador > 0) {
            setContador(contador-1)
        }
    }

    return(
        <div>
            <h1>Contador</h1>
            <button onClick={incrementar}>+</button>
            <a>{contador} Cantidad</a>
            <button onClick={disminuir}>-</button>
        </div>
    )

}
export default ItemCount;