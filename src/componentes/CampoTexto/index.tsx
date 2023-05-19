import './CampoTexto.css'
import React from 'react'

interface CampoTextoProps {
    label: string
    valor: string
    obrigatorio?:boolean
    placeholder:string
    aoAlterado: (valor:string) => void
    tipo? : 'date'| 'text'

}
const CampoTexto = ({label, valor,  placeholder, aoAlterado,obrigatorio = false, tipo = 'text'}:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento:React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input type={tipo} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto