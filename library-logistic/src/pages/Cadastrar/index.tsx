import { useBookMutate } from 'hooks/useBookMutate';
import './styles.css'
import { useEffect, useState } from "react";


interface ModalProps {
    closeModal(): void
}

const Cadastrar = ({ closeModal }: ModalProps) => {


    const [nomeLivro, setNomeLivro] = useState("");
    const [nomeAutor, setNomeAutor] = useState("");
    const [nomeEditora, setNomeEditora] = useState("");

    const { mutate, isSuccess } = useBookMutate()

    const submit = () => {
        const data = {
            nomeLivro,
            nomeAutor,
            nomeEditora
        }

        mutate(data)
        limparTeclado()
    }

    function limparTeclado(){
        setNomeLivro('')
        setNomeAutor('')
        setNomeEditora('')
    }

    useEffect(() => {
        closeModal()
    }, [isSuccess])



    return (

        <div className="home-container">
            <h1>Cadastrar</h1>
            <div>
                <form action="" className="form-container">
                    <input className='form-control' placeholder='Nome do Livro' value={nomeLivro} onChange={e => setNomeLivro(e.target.value)} type='text' />

                    <input type="text" className="form-control" placeholder="Nome do Autor" value={nomeAutor} onChange={e => setNomeAutor(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Nome da editora" value={nomeEditora} onChange={e => setNomeEditora(e.target.value)} />

                    <input type="button" onClick={submit} className="btn btn-primary" value="Cadastrar" />
                </form>
            </div>
        </div>

    );
}

export default Cadastrar;