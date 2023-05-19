import './CampoTexto.css'
import React from 'react'

interface CampoTextoProps {
    label: string
    valor: string
    obrigatorio?:boolean
    placeholder:string
    aoAlterado: (valor:string) => void

}
const CampoTexto = ({label, valor,  placeholder, aoAlterado,obrigatorio = false}:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento:React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto