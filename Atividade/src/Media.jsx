import Menu from "./components/Menu"
import style from "./Media.module.css"

import { useState } from "react"
import { useEffect } from "react"

export const Media = () => {
    
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [numero3, setNumero3] = useState();
    const [numero4, setNumero4] = useState();
    const [numero5, setNumero5] = useState();
    const [respMedia, setMedia] = useState();

    const handleMedia= () => setMedia((parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4) + parseFloat(numero5)) / 5)

    return(
          <div className={style.wrapMedia}>
            <h1>CALCULATIONS</h1>
            <Menu/>
            <br />
            <br />
            <br />
              <div className={style.cardMedia}>
                  <div className={style.wrapInputsMedia}>
                    <h1>Média</h1>
                    <input 
                    className={style.inputMedia}
                    type="text" 
                    placeholder="Digite o primeiro número: " 
                    value={numero1}
                    onChange={(event) => setNumero1(event.target.value)}
                    />

                    <input
                    className={style.inputMedia} 
                    type="text" 
                    placeholder="Digite o segundo número: " 
                    value={numero2}
                    onChange={(event) => setNumero2(event.target.value)}
                    />
                
                    <input
                    className={style.inputMedia} 
                    type="text" 
                    placeholder="Digite o terceiro número: " 
                    value={numero3}
                    onChange={(event) => setNumero3(event.target.value)}
                    />

                    <input
                    className={style.inputMedia} 
                    type="text" 
                    placeholder="Digite o quarto número: " 
                    value={numero4}
                    onChange={(event) => setNumero4(event.target.value)}
                    />

                    <input
                    className={style.inputMedia} 
                    type="text" 
                    placeholder="Digite o quinto número: " 
                    value={numero5}
                    onChange={(event) => setNumero5(event.target.value)}
                    />
                </div>
                <div>
                    <div className={style.wrapInputsCalcular}>
                            <button className={style.buttonMedia} onClick={handleMedia}>Calcular</button>
                            {!isNaN(respMedia) && <p className={style.pMedia} >{respMedia.toFixed(2)}</p>}
                    </div>
                </div>
              </div>
          </div>
)}
