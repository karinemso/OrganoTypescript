import { ArrayTypeNode } from 'typescript'
import Colaborador from '../Colaborador'
import './Time.css'
import { IColaborador } from '../../compartilhada/interfaces/IColaborador'


interface TimeProps {
    corSecundaria: string
    corPrimaria: string
    nome: string
    colaboradores: IColaborador[]

   
}

const Time = ({corSecundaria, corPrimaria, colaboradores, nome}:TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section> 
        : <></>
    )
}

export default Time