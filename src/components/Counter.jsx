import { useState } from "react";

/**
 * Imutabilidade --
 * 
 *  Errado -----
 *  usuarios = ['felipe', 'felipes' 'felipesd' ]
 *  usuarios.push('felipesds')
 * 
 *  Certo ------
 *  usuarios = ['felipe', 'felipes' 'felipesd' ]
 *  novosUsuarios = [...usuarios, 'felipesds']
 *  "...usuarios" -> spread faz uma copia do outros para novo
 */
export function Counter(){

const [ counter, setCounter ] = useState(0);    

    function increment(){
        setCounter(counter+1);
    }

    return(
        <div className="counter">
            <h2>{counter}</h2>
            <button 
                type="button"
                onClick={increment}
            >
                Increment
            </button>
        </div>
    )
}