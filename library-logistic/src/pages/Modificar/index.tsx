import './styles.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBookDelete } from 'hooks/useBookDelete';
import { useBookById } from 'hooks/useBookById';
import { useBookPut } from 'hooks/useBookPut';
import { BookData } from 'interfaces/book-data';


function Modificar() {

    let { modId } = useParams()

    const { mutate } = useBookDelete()
    const { data } = useBookById(modId as any)
    const usePut = useBookPut()



    const deleteBookId = () => {
        mutate(modId as unknown as number)
        routeChange('/catalogo')
    }

    let navigate = useNavigate()
    const routeChange = (path: any) => {
        navigate(path)
    }

    const [nomeLivro, setNomeLivro] = useState("");
    const [nomeAutor, setNomeAutor] = useState("");
    const [nomeEditora, setNomeEditora] = useState("");
    let codigo = modId as unknown as Number


    const modificar = () => {
        const bookData = {
            codigo,
            nomeLivro,
            nomeAutor,
            nomeEditora,
        }
        usePut.mutate(bookData as BookData)
        routeChange('/catalogo')
    }


    useEffect(() => {
        if (data !== undefined) {
            setNomeLivro(data.nomeLivro)
            setNomeAutor(data.nomeAutor)
            setNomeEditora(data.nomeEditora)
        }
    }, [data])


    return (
        <div className="modify-container">
            <h1>Modificar</h1>
            <div>
                <form action="" className="form-catalogo-container">
                    <input className='form-control' placeholder='Nome do Livro' value={nomeLivro} type='text' onChange={e => setNomeLivro(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Nome do Autor" value={nomeAutor} onChange={e => setNomeAutor(e.target.value)} />

                    <input type="text" className="form-control" placeholder="Nome da editora" value={nomeEditora} onChange={e => setNomeEditora(e.target.value)} />

                    <input type="button" className="btn btn-warning" value="Alterar" onClick={modificar} />

                    <input type="button" onClick={deleteBookId} className="btn btn-danger" value="Deletar" />

                    <input type="button" onClick={() => routeChange('/catalogo')} className="btn btn-secondary" value="Cancelar" />
                </form>
            </div>
        </div>
    );
}

export default Modificar;